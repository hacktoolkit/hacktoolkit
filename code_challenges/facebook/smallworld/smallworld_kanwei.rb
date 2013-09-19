#!/usr/bin/env ruby
# Small world puzzle
# Kanwei Li, 2009
# http://kanwei.com/code/2009/02/18/facebook-smallworld.html

# Make sure input file exists and read from it
filename = ARGV[0]
unless filename && File.exist?(filename)
  puts "error: must specify a valid input file"
  exit
end
input = File.open(filename)

$points = [] # Store array of points as a global so we don't have to pass it around

# Populate points array
while line = input.gets do
  break if line.empty?
  n, x, y = line.split(/\s+/)
  $points << [n.to_i, x.to_f, y.to_f]
end

Node = Struct.new(:id, :coords, :left, :right)

# Build a kd-tree
def build_tree(points, depth=0)
  return if points.empty?
  
  axis = depth % 2 + 1
  
  points.sort! { |a, b| a[axis] <=> b[axis] }
  median = points.size / 2
  
  node = Node.new(points[median][0], points[median][1..-1], nil, nil)
  node.left = build_tree(points[0...median], depth+1)
  node.right = build_tree(points[median+1..-1], depth+1)
  return node
end

# Euclidian distanced, squared, between a node and target coords
def distance2(node, target)
  return nil if node.nil? or target.nil?
  c = (node.coords[0] - target[0])
  d = (node.coords[1] - target[1])
  c * c + d * d
end

# Update array of nearest elements if necessary
def check_nearest(nearest, node, target)
  d = distance2(node, target) 
  if nearest.size < 4 || d < nearest.last[0]
    nearest.pop if nearest.size >= 4
    nearest << [d, node.id]
    nearest.sort! { |a, b| a[0] <=> b[0] }
  end
  nearest
end

$nearest = []
def nearest(node, target, depth=0)
  axis = depth % 2
  
  if node.left.nil? && node.right.nil? # Leaf node
    $nearest = check_nearest($nearest, node, target)
    return
  end
  
  # Go down the nearest split
  if node.right.nil? || (node.left && target[axis] <= node.coords[axis])
    nearer = node.left
    further = node.right
  else
    nearer = node.right
    further = node.left
  end
  nearest(nearer, target, depth+1)
  
  # See if we have to check other side
  if further
    if $nearest.size < 4 || (target[axis] - node.coords[axis])**2 < $nearest.last[0]
      nearest(further, target, depth+1)
    end
  end
  
  $nearest = check_nearest($nearest, node, target)
  # puts "end: #{node.id}\t#{distance2(node, target)}"
end
root = build_tree($points)

$points.sort { |a, b| a[0] <=> b[0] }.each do |point|
  $nearest = []
  nearest_3 = nearest(root, point[1..-1])
  puts "#{point[0]} #{nearest_3[1..-1].collect{ |n| n[1] }.join(',')}\n"
end
