class Microwave
  def initialize(input)
    @input = input.to_s
  end

  def timer
    digits = @input

    digits = ("0" * (4 - digits.length) + digits) # Turn seconds into #### (60 -> 0060, 120 -> 0120)
      .split("")
      .map(&:to_i) # Map every element to an integer
      .insert(2, ":") # Insert : in the center

    if digits[3] > 5 # If 10's number is overflowing
      digits[1] = digits[1] + 1 # Increment minute
      digits[3] = digits[3] - 6 # Subtract 6 from 10's element
    end

    digits.join("") # Return string instead of an array
  end
end
