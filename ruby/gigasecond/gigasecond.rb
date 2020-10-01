class Gigasecond
    def self.from(time)
        Time.at(time + 1000000000)
    end
end