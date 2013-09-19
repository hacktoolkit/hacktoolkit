#!/usr/bin/ruby
# Usr Bin Crash puzzle
# Kanwei Li, 2009
# http://kanwei.com/code/2009/03/22/facebook-usrbincrash-revisited.html

def gcd(a, b)
  while a != b
    if a > b
      a = a-b
    else
      b = b-a
    end
  end
  a
end

# Make sure input file exists and read from it
filename = ARGV[0]
unless filename && File.exist?(filename)
  puts "error: must specify a valid input file"
  exit
end
input = File.open(filename)

$items = [] # Store array of items as a global so we don't have to pass it around

def optimize(total_weight)
  table = []
    
  (0...total_weight).each do |cur_weight|
    best = nil
    $items.each_with_index do |item, i|
      c = item.cost
      item_weight = item.weight
      if item_weight <= cur_weight
        c += table[cur_weight - item_weight]
      end
      best = c if best.nil? || c < best
    end
    table[cur_weight] = best
  end
  table[total_weight-1]
end

total_weight = input.gets.to_i

# Populate items array
Item = Struct.new(:weight, :cost)
while line = input.gets do
  break if line.empty?
  item, weight, cost = line.split(/\s+/)
  $items << Item.new(weight.to_i, cost.to_i)
end

# $items.sort! { |a, b| b.weight <=> a.weight }
$items.each do |b|
  $items.delete_if { |i| i.weight < b.weight && (i.weight.to_f / b.weight) * i.cost > b.cost }
end

overall_gcd = gcd($items[0].weight, total_weight)
(1...$items.size).each { |i| overall_gcd = gcd(overall_gcd, $items[i].weight) }

$items.each { |i| i.weight /= overall_gcd }
total_weight /= overall_gcd

puts "#{optimize(total_weight)}\n"
