# https://rubyapi.org/3.1/o/kernel#method-i-gets
myName = $stdin.gets

# https://rubyapi.org/3.1/o/kernel#method-i-puts
# https://programming-idioms.org/idiom/1/print-hello-world
puts 'My name is ' + myName

# https://rubyapi.org/3.1/o/string#method-i-length
# https://programming-idioms.org/idiom/117/get-list-size
# https://rubyapi.org/3.1/o/integer#method-i-to_s
# https://programming-idioms.org/idiom/55/convert-integer-to-string
puts 'The length of my name is: '  + myName.length.to_s