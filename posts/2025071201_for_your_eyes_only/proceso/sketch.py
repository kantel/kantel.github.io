from proceso import Sketch

WIDTH, HEIGHT = 640, 360

p5 = Sketch()

def setup():
    p5.create_canvas(WIDTH, HEIGHT)
    p5.stroke_weight(3)


def draw():
    p5.background(139, 134, 130)
    face()
    eye(p5.width//2 - 45, p5.height//2)
    eye(p5.width//2 + 45, p5.height//2)

def face():
    p5.fill(244, 244, 0)
    p5.circle(p5.width//2, p5.height//2, 160)
    # Den Mund zeichnen
    p5.arc(p5.width//2, p5.height//2, 120, 120,
           p5.QUARTER_PI, p5.PI - p5.QUARTER_PI)

def eye(x, y):
    p5.fill(255)
    p5.circle(x, y, 60)
    # Die Pupillen folgen der Maus
    mx = p5.mouse_x - x
    my = p5.mouse_y - y
    p5.fill(50)
    p5.circle(x + mx//25, y + my//25, 25)
    
p5.run_sketch(setup=setup, draw=draw)