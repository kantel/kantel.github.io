class Heart:
    
    def __init__(self, _x, _y):
        self.loc = p5.Vector(_x, _y)
        self.vel = p5.Vector(uniform(-3.5, 0.5), uniform(3, -0.75))
        self.done = False
        self.size = 32
        self.t = choice(heartp)
  
    def update(self):
        self.loc += self.vel
        if self.size <= 1:
            self.done = True
        else:
            self.size -= 0.3 
  
    def display(self):
        p5.text_size(self.size)
        p5.text(self.t, self.loc.x, self.loc.y)