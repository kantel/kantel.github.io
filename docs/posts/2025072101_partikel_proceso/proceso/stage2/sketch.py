from proceso import Sketch
from random import uniform, choice

WIDTH, HEIGHT = 640, 360
START_X, START_Y = 450, 70

p5 = Sketch()

colors = [(8, 247, 254), (254, 83, 187), (245, 211, 0),
          (0, 255, 65), (250, 25, 25), (148, 103, 89)]

bg2: object  # Declare variable 'bg2'
particles = []

def preload():
    global bg2
    bg2 = p5.load_image("assets/bg2.jpg")  # Load the image

def setup():
    p5.create_canvas(WIDTH, HEIGHT)
    p5.rect_mode(p5.CENTER)

def draw():
    p5.image(bg2, 0, 0)
    update_particles()
    for particle in particles:
       particle.display()
    

def update_particles():
    particle = Particle(START_X, START_Y)
    particles.append(particle)
    for particle in reversed(particles):
       if particle.done:
          particles.remove(particle)
    for particle in particles:
       particle.update()
          

class Particle():
  
  def __init__(self, _x, _y):
    self.loc = p5.Vector(_x, _y)
    self.acc = p5.Vector(0, 0.005)
    self.vel = p5.Vector(uniform(-1.0, 1.0), uniform(2.0, -0.5))
    self.col = choice(colors)
    self.angle = 0.0
    self.delta_angle = uniform(-.1, .1)
    self.lifespan = 255.0
    self.d = uniform(5, 15)
    self.done = False
    
  def update(self):
    self.vel += self.acc
    self.loc += self.vel
    self.angle += self.delta_angle
    self.lifespan -= uniform(0.5, 1.0)*2.0
    self.alpha = self.lifespan
    if self.lifespan <= 10:
      self.done = True
      
  def display(self):
    p5.fill(self.col[0], self.col[1], self.col[2], self.alpha)
    p5.push()
    p5.translate(self.loc.x, self.loc.y)
    p5.rotate(self.angle)
    p5.rect(0, 0, self.d, self.d)
    p5.pop()

p5.run_sketch(preload=preload, setup=setup, draw=draw)