from string import ascii_uppercase as letters, digits
from random import choice, seed, randrange

class Robot:
    def __init__(self):
        self.used_names = []
        self.offset = 0
        self.reset()
    def generate_name(self):
        name = ''
        char_pool = [letters] * 2 + [digits] * 3
        for i in range(len(char_pool)):
            name += choice(char_pool[i])
        if name in self.used_names:
            seed(len(self.used_names) + self.offset)
            self.offset += 1
            return self.generate_name()
        else:
            self.used_names.append(name)
            return name
    def reset(self):
        self.name = self.generate_name()