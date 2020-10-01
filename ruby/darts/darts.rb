class Darts 
    def initialize(x, y)
        @x = x
        @y = y
    end
    def score
        dist = Math.sqrt(@x**2 + @y**2)
        if (dist <= 1)
            10
        elsif (dist <= 5)
            5
        elsif (dist <= 10)
            1
        else 
            0
        end
    end
end