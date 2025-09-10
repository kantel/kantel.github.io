from proceso import Sketch
from random import randint, uniform, choice

WIDTH, HEIGHT = 640, 360
NUM_BALLS = 30

colors = [(230, 96, 55, 200), (17, 42, 106, 200),
          (183, 116, 64, 200), (212, 251, 69, 200),
          (252, 75, 200, 200), (159, 53, 233, 200),
          (57, 218, 56, 200), (67, 253, 133, 200),
          (78, 148, 42, 200), (67, 254, 211, 200),
          (74, 143, 186, 200), (52, 99, 234, 200)]
balls = []

p5 = Sketch()

def setup():
    p5.create_canvas(WIDTH, HEIGHT)
    p5.stroke_weight(2)
    reset()

def draw():
    p5.background(192)
    for ball in balls:
        ball.update()
        ball.display()

def reset():
    for _ in range(NUM_BALLS):
        ball = Ball()
        balls.append(ball)

def mouse_clicked():
    balls.clear()
    reset()

class Ball():

    def __init__(self):
        self.radius = randint(8, 16)
        self.diam   = self.radius*2
        x = randint(self.diam, p5.width - self.diam)
        y = randint(self.diam, p5.height - self.diam)
        self.loc = p5.Vector(x, y)
        vel_x = uniform(-1.5, 1.5)
        vel_y = uniform(-1.5, 1.5)
        self.vel = p5.Vector(vel_x, vel_y)
        self.c = choice(colors)

    def update(self):
        self.loc += self.vel
        # check borders
        if self.loc.x <= self.radius or self.loc.x >= p5.width - self.radius:
            self.vel.x *= -1
        if self.loc.y <= self.radius or self.loc.y >= p5.height - self.radius:
            self.vel.y *= -1
        

    def display(self):
        p5.fill(self.c)
        p5.circle(self.loc.x, self.loc.y, self.diam)
        
p5.run_sketch(setup=setup, draw=draw, mouse_clicked=mouse_clicked)