
        let count = localStorage.getItem('visitCount') || 0;
        count++;
        document.getElementById('count').textContent = count;
        localStorage.setItem('visitCount', count);

        // Animacja śniegu
        const canvas = document.getElementById('snow');
        const ctx = canvas.getContext('2d');

        let snowflakes = [];

        function createSnowflakes() {
            for (let i = 0; i < 100; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 3 + 1,
                    speed: Math.random() * 2 + 1,
                    opacity: Math.random()
                });
            }
        }

        function drawSnowflakes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            for (let i = 0; i < snowflakes.length; i++) {
                let snowflake = snowflakes[i];
                ctx.moveTo(snowflake.x, snowflake.y);
                ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
            }
            ctx.fill();
            moveSnowflakes();
        }

        function moveSnowflakes() {
            for (let i = 0; i < snowflakes.length; i++) {
                let snowflake = snowflakes[i];
                snowflake.y += snowflake.speed;
                if (snowflake.y > canvas.height) {
                    snowflake.y = -5;
                }
            }
        }

        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createSnowflakes();
            setInterval(drawSnowflakes, 30);
        }

        window.addEventListener('resize', function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        window.addEventListener('load', init);