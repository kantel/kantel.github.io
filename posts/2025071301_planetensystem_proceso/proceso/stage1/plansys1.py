from proceso import Sketch

WIDTH, HEIGHT = 640, 360   # Aspect Ratio: 16:9

sun_diam = 80

earth_diam = 30
earth_orbit_radius = 130
earth_angle = 0

p5 = Sketch()

def setup():
    p5.create_canvas(WIDTH, HEIGHT)

def draw():
    global earth_angle
    p5.background(0, 0, 0)

    # Sonne im Zentrum
    p5.translate(p5.width//2, p5.height//2)
    p5.fill(255, 200, 64)
    p5.circle(0, 0, sun_diam)

    # Erde dreht sich um die Sonne
    p5.rotate(earth_angle)
    p5.translate(earth_orbit_radius, 0)
    p5.fill(64, 64, 255)
    p5.circle(0, 0, earth_diam)
    earth_angle += 0.01

p5.run_sketch(setup=setup, draw=draw)