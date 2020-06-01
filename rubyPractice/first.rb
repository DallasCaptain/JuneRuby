# # 3.times { puts "WOW" }

# @x = 12
# @y = 10


# # if x < y
# #     puts 'x is < y'
# # elsif x > y
# #     puts 'x is > y'
# # else
# #     puts 'x == y'
# # end

# # unless x > 10
# #     puts 'false'
# # end

# # puts 'false' unless x > 10

# # while true do
# #     puts x
# #     x -= 1
# #     break if x == 10
# # end

# # for i in 'A'..'z'
# #     next if i =='a'
# #     puts i
# #     break if i =='r'
# # end


# def hello user, user2
#     puts "hello #{user} and #{user2}"
#     @p = 'bob'
#     @x

# end

# z = hello 'bob', 'carl'

# puts z
# puts @p

# [1,2,3,4,5].each { |x| puts x }

#  arr = (1...10).to_a

# p arr

# def fun
#     [4,2,6,87,3].each {|i| yield i }
    
# end

# fun {|x| puts "value is #{ x + 9 }"}
# asdf:
# :asdf
# user = {name: 'bob', age: 90}
# p user
# puts user[:name]

require_relative 'first_mod'

class String
    include MyModule
end

'asdfasdf'.say_hello
