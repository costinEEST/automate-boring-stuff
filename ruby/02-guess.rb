secret_number = rand(1..20)
puts 'I am thinking of a number between 1 and 20.'

(1..6).each do |guesses_taken|
  print 'Take a guess: '
  guess = gets.chomp.to_i

  if guess < secret_number
    puts 'Your guess is too low.'
  elsif guess > secret_number
    puts 'Your guess is too high.'
  else
    break
  end
end

if guess == secret_number
  puts "Good job! You guessed my number in #{guesses_taken} guesses!"
else
  puts "Nope. The number I was thinking of was #{secret_number}."
end
