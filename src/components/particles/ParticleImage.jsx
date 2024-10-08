import { useEffect, useRef } from "react";

const ParticleImage = ({
  path,
  width = 2000,
  height = 1000,
  particleSize = 2,
  numParticles = null,
}) => {
  const canvasAsRef = useRef(null);

  const mouseRadius = (width + height) / 12;

  const maxDistanceSquared = mouseRadius * mouseRadius;
  const particleSizeSquared = particleSize * particleSize;
  var hasLoaded = false;

  const positionGrid = [];
  const positionGridRows = Math.ceil(height / mouseRadius);
  const positionGridCols = Math.ceil(width / mouseRadius);

  useEffect(() => {
    class GridCell {
      constructor() {
        this.particles = new Set();
      }

      addParticle(particle) {
        this.particles.add(particle);
      }

      removeParticle(particle) {
        this.particles.delete(particle);
      }
    }

    for (let i = 0; i < positionGridRows; i++) {
      positionGrid[i] = [];
      for (let j = 0; j < positionGridCols; j++) {
 
        positionGrid[i][j] = new GridCell();
      }
    }

    const canvas = canvasAsRef.current;
    const ctx = canvas.getContext("2d");

    const IS_NUM_PARTICLES_SET = numParticles !== null;
    var NUM_PARTICLES = numParticles !== null ? numParticles : 1000;

    const imageOffsetX = 0.2;
    const imageOffsetY = 0.2;

    canvas.width = width;
    canvas.height = height;
    let particleArr = [];
    let mouseMoved = false;

    let mouse = {
      x: null,
      y: null,
      radius: mouseRadius,
    };

    window.addEventListener("mousemove", function (event) {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouseMoved = true;
    });

    function drawImage(data) {
      class Particle {
        constructor(x, y, color, size) {
          this.x = x;
          this.y = y;
          this.color = color;
          this.size = size;
          this.baseX = this.x;
          this.baseY = this.y;
          this.density = Math.random() * 30 + 1;
          this.positionGridRow = Math.floor(this.y / mouseRadius);
          this.positionGridCol = Math.floor(this.x / mouseRadius);
        }

        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        }

        calculateGridPosition() {
          const row = Math.floor(this.y / mouseRadius);
          const col = Math.floor(this.x / mouseRadius);

          if (row !== this.positionGridRow || col !== this.positionGridCol) {
            if (
              row >= 0 &&
              row < positionGridRows &&
              col >= 0 &&
              col < positionGridCols
            ) {
              if (this.positionGridCol !== -1 && this.positionGridRow !== -1) {
                positionGrid[this.positionGridRow][
                  this.positionGridCol
                ].removeParticle(this);
              }

              positionGrid[row][col].addParticle(this);
              this.positionGridRow = row;
              this.positionGridCol = col;
            } else {
              this.positionGridRow = -1;
              this.positionGridCol = -1;
            }
          }
        }

        update() {

          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distanceSquared = Math.abs(dx * dx + dy * dy);

          if (
            mouseMoved &&
            distanceSquared < maxDistanceSquared + particleSizeSquared
          ) {
            const forceDirectionX = dx / mouseRadius;
            const forceDirectionY = dy / mouseRadius;
            const force = 1 - distanceSquared / maxDistanceSquared;

            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;

            this.x -= directionX;
            this.y -= directionY;

            this.calculateGridPosition();
          }
        }

        applyForceBackToOriginalPosition() {
          this.x -= (this.x - this.baseX) / 15;
          this.y -= (this.y - this.baseY) / 15;
          this.calculateGridPosition();
        }
      }

      function init() {
        particleArr = [];
        const numPixelsWithPositiveAlpha = data.data.filter(
          (_, i) => i % 4 === 3 && data.data[i] > 128
        ).length;
        NUM_PARTICLES = Math.min(NUM_PARTICLES, numPixelsWithPositiveAlpha);

        for (let y = 0, y2 = data.height; y < y2; y++) {
          for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
  
              if (
                IS_NUM_PARTICLES_SET &&
                NUM_PARTICLES < numPixelsWithPositiveAlpha &&
                Math.random() > NUM_PARTICLES / numPixelsWithPositiveAlpha
              ) {
                continue;
              }

              const positionX =
                canvas.width * (imageOffsetX / 2) +
                Math.floor((x / data.width) * canvas.width) *
                  (1 - imageOffsetX);
              const positionY =
                canvas.height * (imageOffsetY / 2) +
                Math.floor((y / data.height) * canvas.height) *
                  (1 - imageOffsetY);
              const index = y * 4 * data.width + x * 4;

              const color =
                "rgb(" +
                data.data[index] +
                "," +
                data.data[index + 1] +
                "," +
                data.data[index + 2] +
                ")";
              particleArr.push(
                new Particle(positionX, positionY, color, particleSize)
              );

              const row = Math.floor(positionY / mouseRadius);
              const col = Math.floor(positionX / mouseRadius);

              positionGrid[row][col].particles.add(
                particleArr[particleArr.length - 1]
              );
            }
          }
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const mouseRow = Math.floor(mouse.y / mouseRadius);
        const mouseCol = Math.floor(mouse.x / mouseRadius);
        const rowColOffsets = [
          [0, 1],
          [0, -1],
          [1, 1],
          [1, -1],
          [1, 0],
          [-1, 0],
          [0, 0],
          [-1, -1],
          [-1, 1],
        ];

        if (mouseMoved) {
          for (let i = 0; i < rowColOffsets.length; ++i) {
            const particleRow = mouseRow + rowColOffsets[i][0];
            const particleCol = mouseCol + rowColOffsets[i][1];

            if (
              particleRow < 0 ||
              particleRow >= positionGridRows ||
              particleCol < 0 ||
              particleCol >= positionGridCols
            )
              continue;

            for (const particle of positionGrid[particleRow][particleCol]
              .particles) {
              particle.update();
            }
          }
        }


        for (let i = 0; i < particleArr.length; i++) {

          if (
            particleArr[i].x !== particleArr[i].baseX ||
            particleArr[i].y !== particleArr[i].baseY
          ) {
            particleArr[i].applyForceBackToOriginalPosition();
          }

          particleArr[i].draw();
        }

        mouseMoved = false;
      }

      init();
      animate();
    }

    /** @param {ImageBitmap} bitmap */
    function readImageData(bitmap) {
      const { width: w, height: h } = bitmap;
      const _canvas = new OffscreenCanvas(w, h);
      const _ctx = _canvas.getContext("2d");

      _ctx.drawImage(bitmap, 0, 0);
      const imageData = _ctx.getImageData(0, 0, w, h);

      return imageData;
    }

    window.addEventListener("load", function () {
      if (hasLoaded) {
        return;
      }

      fetch(path)
        .then((r) => r.blob())
        .then(createImageBitmap)
        .then(readImageData)
        .then((pixels) => {
          drawImage(pixels);
        });

      hasLoaded = true;
    });
  }, []);

  return <canvas ref={canvasAsRef}/>;
};

export default ParticleImage;
