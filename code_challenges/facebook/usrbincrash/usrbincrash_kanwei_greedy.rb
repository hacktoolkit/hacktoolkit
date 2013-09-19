#!/usr/bin/env ruby
# Usr Bin Crash puzzle
# Kanwei Li, 2009
# http://kanwei.com/code/2009/02/17/facebook-usrbincrash.html

# From memoize gem
def memoize(name)
 cache = {}
 (class<<self; self; end).send(:define_method, name) do |*args|
   cache[args] = super unless cache.has_key?(args)
   cache[args]
 end
 cache
end

# Make sure input file exists and read from it
filename = ARGV[0]
unless filename && File.exist?(filename)
  puts "error: must specify a valid input file"
  exit
end
input = File.open(filename)

$items = [] # Store array of items as a global so we don't have to pass it around

# Recursive is clean but blows stack on large inputs!
def optimize(weight)
  return 0 if weight <= 0

  best = nil
  $items.each do |item|
    c = optimize(weight - item.weight) + item.cost
    best = c if best.nil? || c < best
  end
  best
end
memoize :optimize

# Finally, something that works, somewhat ugly though =\
def optimize3(weight, cost=0, items = $items)
  return cost if weight <= 0 || items.empty?
  # puts "#{weight}\t#{cost}\t#{items.collect{|i| i.weight}.join(' ')}"
  same_ratio = items.find_all { |i| i.ratio == items[0].ratio }
  global_best = nil
  same_ratio.size.times do |x|
    if weight % items[x].weight == 0
      return items[x].cost * (weight / items[x].weight) + cost
    end
    
    best = (x == 0) ? items[x].cost * (weight / items[x].weight + 1) + cost : nil
    
    (items - [items[x]]).each do |item|
      if x == 0
        c = optimize3(weight % items[x].weight, items[x].cost * (weight / items[x].weight) + cost, items - [items[x]])
      else
        c = optimize3(weight - items[x].weight, items[x].cost + cost, items)
      end
      best = c if (best.nil? || c < best)
    end
    global_best = best if best && (global_best.nil? || best < global_best)
  end
  global_best
end
memoize :optimize3

total_weight = input.gets.to_i

# Populate items array
Item = Struct.new(:weight, :cost, :ratio)
while line = input.gets do
  break if line.empty?
  item, weight, cost = line.split(/\s+/)
  $items << Item.new(weight.to_i, cost.to_i, weight.to_f / cost.to_f)
end
$items = $items.sort_by { |i| [i.ratio, i.weight] }.reverse # Larger ratios first

# Some pruning of redundant items
$items.each do |b|
  $items.delete_if { |i| i.weight > b.weight && i.ratio < b.ratio }
end

puts "#{optimize3(total_weight)}\n"
