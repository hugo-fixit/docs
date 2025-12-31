---
title: Canvas implementation of small fish swimming animation
linktitle: Fly Fish Animation
date: 2024-05-22T10:12:11+08:00
categories:
  - Guides
tags:
  - customization
---

Sharing a canvas-implemented fish swimming animation effect.

<!--more-->

## Effect Preview

Visit [the author's blog](https://lruihao.cn), scroll to the bottom, and you can see the effect.

## Implementation Steps

> [!TIP]
> **Updated on 2024.11.05**: This has been separated into an independent theme component. You can configure related parameters through Hugo configuration. For details, please check the [flyfish theme component](https://github.com/hugo-fixit/cmpt-flyfish).
>
> The following is the original tutorial content:

1. Create a file `assets/js/flyfish.js` in your site directory with the following content:

    ```javascript {title="flyfish.js"}
    /**
     * Source code from the internet, author unknown
     * @modified by Lruihao 2024-05-21 removed jQuery dependency
     * @description A fish swimming animation effect
     */
    const RENDERER = {
      POINT_INTERVAL: 5,
      FISH_COUNT: 3,
      MAX_INTERVAL_COUNT: 50,
      INIT_HEIGHT_RATE: 0.5,
      THRESHOLD: 50,

      init() {
        this.setParameters()
        this.setStyle()
        this.reconstructMethods()
        this.setup()
        this.bindEvent()
        this.render()
      },
      setParameters() {
        this.window = window
        this.container = document.createElement('div')
        this.container.id = 'flyfish'
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.points = []
        this.fishes = []
        this.watchIds = []
        document.querySelector('.footer').appendChild(this.container)
      },
      setStyle() {
        const style = document.createElement('style')
        style.innerHTML = `
        .footer {
          position: relative;
        }
        #flyfish {
          position: absolute;
          width: 100%;
          height: 230px;
          overflow: hidden;
          left: 0;
          bottom: 0;
          z-index: -1;
          pointer-events: none;
        }`
        document.querySelector('head').appendChild(style)
      },
      createSurfacePoints() {
        const count = Math.round(this.width / this.POINT_INTERVAL)
        this.pointInterval = this.width / (count - 1)
        this.points.push(new SURFACE_POINT(this, 0))

        for (let i = 1; i < count; i++) {
          const point = new SURFACE_POINT(this, i * this.pointInterval)
          const previous = this.points[i - 1]

          point.setPreviousPoint(previous)
          previous.setNextPoint(point)
          this.points.push(point)
        }
      },
      reconstructMethods() {
        this.watchWindowSize = this.watchWindowSize.bind(this)
        this.jdugeToStopResize = this.jdugeToStopResize.bind(this)
        this.startEpicenter = this.startEpicenter.bind(this)
        this.moveEpicenter = this.moveEpicenter.bind(this)
        this.render = this.render.bind(this)
      },
      setup() {
        this.points.length = 0
        this.fishes.length = 0
        this.watchIds.length = 0
        this.intervalCount = this.MAX_INTERVAL_COUNT

        this.containerWidth = this.container.offsetWidth
        this.containerHeight = this.container.offsetHeight
        this.width = this.containerWidth
        this.height = this.containerHeight
        this.fishCount
          = (((this.FISH_COUNT * this.width) / 500) * this.height) / 500
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.reverse = false

        this.container.appendChild(this.canvas)
        this.fishes.push(new FISH(this))
        this.createSurfacePoints()
      },
      watchWindowSize() {
        this.clearTimer()
        this.tmpWidth = this.window.innerWidth
        this.tmpHeight = this.window.innerHeight
        this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL))
      },
      clearTimer() {
        while (this.watchIds.length > 0) {
          clearTimeout(this.watchIds.pop())
        }
      },
      jdugeToStopResize() {
        const width = this.window.innerWidth
        const height = this.window.innerHeight
        const stopped = width === this.tmpWidth && height === this.tmpHeight

        this.tmpWidth = width
        this.tmpHeight = height

        if (stopped) {
          this.setup()
        }
      },
      bindEvent() {
        const self = this
        this.window.addEventListener('resize', () => {
          self.watchWindowSize()
        })
        this.container.addEventListener('mouseenter', (event) => {
          self.startEpicenter(event)
        })
        this.container.addEventListener('mousemove', (event) => {
          self.moveEpicenter(event)
        })
      },
      getAxis(event) {
        const offset = this.container.getBoundingClientRect()

        return {
          x: event.clientX - offset.left + this.window.scrollX,
          y: event.clientY - offset.top + this.window.scrollY,
        }
      },
      startEpicenter(event) {
        this.axis = this.getAxis(event)
      },
      moveEpicenter(event) {
        const axis = this.getAxis(event)

        if (!this.axis) {
          this.axis = axis
        }
        this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y)
        this.axis = axis
      },
      generateEpicenter(x, y, velocity) {
        if (
          y < this.height / 2 - this.THRESHOLD
          || y > this.height / 2 + this.THRESHOLD
        ) {
          return
        }
        const index = Math.round(x / this.pointInterval)

        if (index < 0 || index >= this.points.length) {
          return
        }
        this.points[index].interfere(y, velocity)
      },
      controlStatus() {
        for (let i = 0, count = this.points.length; i < count; i++) {
          this.points[i].updateSelf()
        }
        for (let i = 0, count = this.points.length; i < count; i++) {
          this.points[i].updateNeighbors()
        }
        if (this.fishes.length < this.fishCount) {
          if (--this.intervalCount === 0) {
            this.intervalCount = this.MAX_INTERVAL_COUNT
            this.fishes.push(new FISH(this))
          }
        }
      },
      render() {
        const self = this
        function renderFrame() {
          self.controlStatus()
          self.context.clearRect(0, 0, self.width, self.height)
          // Here we use the FixIt theme's isDark property to determine if it's a dark theme
          if (fixit.isDark) {
            self.context.fillStyle = 'rgb(255 255 255 / 10%)'
          }
          else {
            self.context.fillStyle = '#e6e5f8'
          }

          for (let i = 0, count = self.fishes.length; i < count; i++) {
            self.fishes[i].render(self.context)
          }
          self.context.save()
          self.context.globalCompositeOperation = 'xor'
          self.context.beginPath()
          self.context.moveTo(0, self.reverse ? 0 : self.height)

          for (let i = 0, count = self.points.length; i < count; i++) {
            self.points[i].render(self.context)
          }
          self.context.lineTo(self.width, self.reverse ? 0 : self.height)
          self.context.closePath()
          self.context.fill()
          self.context.restore()

          requestAnimationFrame(renderFrame)
        }
        renderFrame()
      },
    }

    // SURFACE_POINT class
    function SURFACE_POINT(renderer, x) {
      this.renderer = renderer
      this.x = x
      this.init()
    }
    SURFACE_POINT.prototype = {
      SPRING_CONSTANT: 0.03,
      SPRING_FRICTION: 0.9,
      WAVE_SPREAD: 0.3,
      ACCELARATION_RATE: 0.01,

      init() {
        this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE
        this.height = this.initHeight
        this.fy = 0
        this.force = { previous: 0, next: 0 }
      },
      setPreviousPoint(previous) {
        this.previous = previous
      },
      setNextPoint(next) {
        this.next = next
      },
      interfere(y, velocity) {
        this.fy
          = this.renderer.height
            * this.ACCELARATION_RATE
            * (this.renderer.height - this.height - y >= 0 ? -1 : 1)
            * Math.abs(velocity)
      },
      updateSelf() {
        this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height)
        this.fy *= this.SPRING_FRICTION
        this.height += this.fy
      },
      updateNeighbors() {
        if (this.previous) {
          this.force.previous
            = this.WAVE_SPREAD * (this.height - this.previous.height)
        }
        if (this.next) {
          this.force.next = this.WAVE_SPREAD * (this.height - this.next.height)
        }
      },
      render(context) {
        if (this.previous) {
          this.previous.height += this.force.previous
          this.previous.fy += this.force.previous
        }
        if (this.next) {
          this.next.height += this.force.next
          this.next.fy += this.force.next
        }
        context.lineTo(this.x, this.renderer.height - this.height)
      },
    }

    // FISH class
    function FISH(renderer) {
      this.renderer = renderer
      this.init()
    }
    FISH.prototype = {
      GRAVITY: 0.4,

      init() {
        this.direction = Math.random() < 0.5
        this.x = this.direction
          ? this.renderer.width + this.renderer.THRESHOLD
          : -this.renderer.THRESHOLD
        this.previousY = this.y
        this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1)

        if (this.renderer.reverse) {
          this.y = this.getRandomValue(
            (this.renderer.height * 1) / 10,
            (this.renderer.height * 4) / 10
          )
          this.vy = this.getRandomValue(2, 5)
          this.ay = this.getRandomValue(0.05, 0.2)
        }
        else {
          this.y = this.getRandomValue(
            (this.renderer.height * 6) / 10,
            (this.renderer.height * 9) / 10
          )
          this.vy = this.getRandomValue(-5, -2)
          this.ay = this.getRandomValue(-0.2, -0.05)
        }
        this.isOut = false
        this.theta = 0
        this.phi = 0
      },
      getRandomValue(min, max) {
        return min + (max - min) * Math.random()
      },
      controlStatus(context) {
        this.previousY = this.y
        this.x += this.vx
        this.y += this.vy
        this.vy += this.ay

        if (this.renderer.reverse) {
          if (this.y > this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
            this.vy -= this.GRAVITY
            this.isOut = true
          }
          else {
            if (this.isOut) {
              this.ay = this.getRandomValue(0.05, 0.2)
            }
            this.isOut = false
          }
        }
        else {
          if (this.y < this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
            this.vy += this.GRAVITY
            this.isOut = true
          }
          else {
            if (this.isOut) {
              this.ay = this.getRandomValue(-0.2, -0.05)
            }
            this.isOut = false
          }
        }
        if (!this.isOut) {
          this.theta += Math.PI / 20
          this.theta %= Math.PI * 2
          this.phi += Math.PI / 30
          this.phi %= Math.PI * 2
        }
        this.renderer.generateEpicenter(
          this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD,
          this.y,
          this.y - this.previousY
        )

        if (
          (this.vx > 0 && this.x > this.renderer.width + this.renderer.THRESHOLD)
          || (this.vx < 0 && this.x < -this.renderer.THRESHOLD)
        ) {
          this.init()
        }
      },
      render(context) {
        context.save()
        context.translate(this.x, this.y)
        context.rotate(Math.PI + Math.atan2(this.vy, this.vx))
        context.scale(1, this.direction ? 1 : -1)
        context.beginPath()
        context.moveTo(-30, 0)
        context.bezierCurveTo(-20, 15, 15, 10, 40, 0)
        context.bezierCurveTo(15, -10, -20, -15, -30, 0)
        context.fill()

        context.save()
        context.translate(40, 0)
        context.scale(0.9 + 0.2 * Math.sin(this.theta), 1)
        context.beginPath()
        context.moveTo(0, 0)
        context.quadraticCurveTo(5, 10, 20, 8)
        context.quadraticCurveTo(12, 5, 10, 0)
        context.quadraticCurveTo(12, -5, 20, -8)
        context.quadraticCurveTo(5, -10, 0, 0)
        context.fill()
        context.restore()

        context.save()
        context.translate(-3, 0)
        context.rotate(
          (Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi))
          * (this.renderer.reverse ? -1 : 1)
        )

        context.beginPath()

        if (this.renderer.reverse) {
          context.moveTo(5, 0)
          context.bezierCurveTo(10, 10, 10, 30, 0, 40)
          context.bezierCurveTo(-12, 25, -8, 10, 0, 0)
        }
        else {
          context.moveTo(-5, 0)
          context.bezierCurveTo(-10, -10, -10, -30, 0, -40)
          context.bezierCurveTo(12, -25, 8, -10, 0, 0)
        }
        context.closePath()
        context.fill()
        context.restore()
        context.restore()
        this.controlStatus(context)
      },
    }

    window.onload = function () {
      RENDERER.init()
    }
    ```

2. Include the `flyfish.js` file in your theme parameter configuration:

    ```toml {title="params.toml"}
    # ...
    [page.library]

    [page.library.js]
    flyfish = "/js/flyfish.js"
    ```

## Special Notes

The source code comes from the internet, and the original author is unknown. I only removed the jQuery dependency and adapted it for the FixIt theme.

If you need to modify colors, height, or other styles, please modify the `flyfish.js` file yourself.
