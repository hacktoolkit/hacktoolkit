# eating_out.rb
# author: Jonathan Tsai <akajontsai-devel@yahoo.com>
# 2011.12.19

require 'csv'

class RestaurantGuide
  def initialize(csvfile, foods)
    init_meal(foods)
    init_menus(csvfile)
  end

  def find_cheapest_meal
    best_r = nil
    best_price = nil
    @restaurants.each_value do |r|
      if r.has_meal?
        price = r.get_meal_price()
        if best_price == nil || price < best_price
          best_price = price
          best_r = r
        end
      end
    end # restaurants
    puts (best_r == nil ? 'nil' : "#{best_r.id}, #{best_price}")
  end

  #######
  private

  def init_meal(foods)
    @meal = {}
    foods.each do |food|
      @meal[food] = true
    end
  end

  def init_menus(csvfile)
    @restaurants = {}
    # CSV format
    # restaurant_id, price, food
    CSV.foreach(csvfile) do |row|
      is_combo = row.size > 3
      valid = false
      restaurant_id = nil
      price = nil
      items = []
      row.each_with_index do |value, i|
        valid = false
        break if row.size < 3
        value = value.strip
        restaurant_id = value if i == 0
        price = value.to_f if i == 1
        items << value if i > 1
        valid = true
      end # row
      if valid
        r = @restaurants.has_key?(restaurant_id) ? @restaurants[restaurant_id] :
          (@restaurants[restaurant_id] = Restaurant.new(restaurant_id, @meal))
        r.add_menu_entry(items, price)
      end
    end # csvfile
  end
end # RestaurantGuide

class Restaurant
  attr_accessor :id

  def initialize(id, meal)
    @id = id
    @meal = meal # hash of desired foods
    @menu = []
    @menu_by_foods = {}
  end

  def add_menu_entry(items, price)
    # Assume that there are no duplicate menu entries
    # e.g. chicken_sandwich listed for 2 different prices
    entry = MenuEntry.new(items, price)
    # only add this entry if it could potentially be used for the desired meal
    if entry.is_candidate?(@meal)
      items.each do |item|
        food_group = @menu_by_foods.has_key?(item) ? @menu_by_foods[item] :
          (@menu_by_foods[item] = [])
        food_group << entry
      end
    end
  end

  def has_meal?
    satisfied = true
    @meal.each_key do |item|
      # exclude restaurants that is missing at least one desired food
      break if !(satisfied = @menu_by_foods.has_key?(item))
    end
    return satisfied
  end

  def get_meal_price
    price = greedy_approximation()
    #price = optimal_meal_price()
    return price
  end

  def greedy_approximation
    # assume a food is not represented in both a combo and a la carte (single item) at a given restaurant
    total = 0
    order = []
    i = 0
    @meal.each_key do |item|
      i += 1
      # search for combos already placed
      already_ordered = false
      order.each do |order_entry|
        break if already_ordered = order_entry.has_item?(item)
      end
      if !already_ordered
        entry = @menu_by_foods[item][0]
        order << entry
        total += entry.price
      end
    end

    return total
  end # greedy_approximation

  def optimal_meal_price
    # TODO: incomplete

    orders = generate_all_orders()
    best_price = nil
    orders.each do |order|
      total = 0
      order.each do |entry|
        total += entry.price
      end
      best_price = total if best_price == nil || total < best_price
    end
    return best_price
  end

  def generate_all_orders
    # TODO: incomplete

    # this problem has exponential computational complexity
    # foods f1 .. fn
    # each food has combos c1 .. cm
    # total combinations: m^n
  end
    
end # Restaurant

class MenuEntry
  attr_accessor :items, :price
  def initialize(items, price)
    @items = {}
    items.each do |item|
      @items[item] = true
    end
    @price = price
  end

  def has_item?(item)
    @items.has_key?(item)
  end

  def is_candidate?(meal)
    # just need to fine one item in this entry that is part of the meal
    potential = false
    @items.each_key do |item|
      break if potential = meal.has_key?(item)
    end
    return potential
  end

  def to_s
    return "{ MenuEntry: { Items: [ #{@items.keys.join(',')} ], Price: #{price} } }"
  end

end # MenuEntry

def usage
  puts "Usage:\n    ruby " + __FILE__ + " MENU.csv food1 [food2 [food3 [...]]]"
end

def main
  if ARGV.size < 2
    puts "Invalid input"
    usage()
  else
    csvfile = nil
    foods = []
    ARGV.each_with_index do |arg, i|
      if i == 0
        csvfile = arg
        if !File.exists?(csvfile)
          puts "File not found: #{csvfile}"
          return
        end
      else
        foods << arg
      end
    end

    guide = RestaurantGuide.new(csvfile, foods)
    guide.find_cheapest_meal()
  end
end

if __FILE__ == $PROGRAM_NAME
  main()
end
