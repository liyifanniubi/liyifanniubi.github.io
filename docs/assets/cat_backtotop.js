document.addEventListener('DOMContentLoaded', function () {
  let style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
      @media (max-width:1000px) {
          .back-to-top {
              display: none !important;
          }
      }

      @-webkit-keyframes wrench {
          0% {
              -webkit-transform: rotate(-12deg);
              transform: rotate(-12deg)
          }

          8% {
              -webkit-transform: rotate(12deg);
              transform: rotate(12deg)
          }

          10% {
              -webkit-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          18%,
          20% {
              -webkit-transform: rotate(-24deg);
              transform: rotate(-24deg)
          }

          28%,
          30% {
              -webkit-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          38%,
          40% {
              -webkit-transform: rotate(-24deg);
              transform: rotate(-24deg)
          }

          48%,
          50% {
              -webkit-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          58%,
          60% {
              -webkit-transform: rotate(-24deg);
              transform: rotate(-24deg)
          }

          68% {
              -webkit-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          100%,
          75% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg)
          }
      }

      @keyframes wrench {
          0% {
              -webkit-transform: rotate(-12deg);
              -ms-transform: rotate(-12deg);
              transform: rotate(-12deg)
          }

          8% {
              -webkit-transform: rotate(12deg);
              -ms-transform: rotate(12deg);
              transform: rotate(12deg)
          }

          10% {
              -webkit-transform: rotate(24deg);
              -ms-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          18%,
          20% {
              -webkit-transform: rotate(-24deg);
              -ms-transform: rotate(-24deg);
              transform: rotate(-24deg)
          }

          28%,
          30% {
              -webkit-transform: rotate(24deg);
              -ms-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          38%,
          40% {
              -webkit-transform: rotate(-24deg);
              -ms-transform: rotate(-24deg);
              transform: rotate(-24deg)
          }

          48%,
          50% {
              -webkit-transform: rotate(24deg);
              -ms-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          58%,
          60% {
              -webkit-transform: rotate(-24deg);
              -ms-transform: rotate(-24deg);
              transform: rotate(-24deg)
          }

          68% {
              -webkit-transform: rotate(24deg);
              -ms-transform: rotate(24deg);
              transform: rotate(24deg)
          }

          100%,
          75% {
              -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              transform: rotate(0deg)
          }
      }

      .faa-parent.animated-hover:hover>.faa-wrench,
      .faa-wrench.animated,
      .faa-wrench.animated-hover:hover {
          -webkit-animation: wrench 2.5s ease infinite;
          animation: wrench 2.5s ease infinite;
          transform-origin-x: 90%;
          transform-origin-y: 35%;
          transform-origin-z: initial
      }

      .faa-parent.animated-hover:hover>.faa-wrench.faa-fast,
      .faa-wrench.animated-hover.faa-fast:hover,
      .faa-wrench.animated.faa-fast {
          -webkit-animation: wrench 1.2s ease infinite;
          animation: wrench 1.2s ease infinite
      }

      .faa-parent.animated-hover:hover>.faa-wrench.faa-slow,
      .faa-wrench.animated-hover.faa-slow:hover,
      .faa-wrench.animated.faa-slow {
          -webkit-animation: wrench 3.7s ease infinite;
          animation: wrench 3.7s ease infinite
      }

      @-webkit-keyframes ring {
          0% {
              -webkit-transform: rotate(-15deg);
              transform: rotate(-15deg)
          }

          2% {
              -webkit-transform: rotate(15deg);
              transform: rotate(15deg)
          }

          4% {
              -webkit-transform: rotate(-18deg);
              transform: rotate(-18deg)
          }

          6% {
              -webkit-transform: rotate(18deg);
              transform: rotate(18deg)
          }

          8% {
              -webkit-transform: rotate(-22deg);
              transform: rotate(-22deg)
          }

          10% {
              -webkit-transform: rotate(22deg);
              transform: rotate(22deg)
          }

          12% {
              -webkit-transform: rotate(-18deg);
              transform: rotate(-18deg)
          }

          14% {
              -webkit-transform: rotate(18deg);
              transform: rotate(18deg)
          }

          16% {
              -webkit-transform: rotate(-12deg);
              transform: rotate(-12deg)
          }

          18% {
              -webkit-transform: rotate(12deg);
              transform: rotate(12deg)
          }

          100%,
          20% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg)
          }
      }

      @keyframes ring {
          0% {
              -webkit-transform: rotate(-15deg);
              -ms-transform: rotate(-15deg);
              transform: rotate(-15deg)
          }

          2% {
              -webkit-transform: rotate(15deg);
              -ms-transform: rotate(15deg);
              transform: rotate(15deg)
          }

          4% {
              -webkit-transform: rotate(-18deg);
              -ms-transform: rotate(-18deg);
              transform: rotate(-18deg)
          }

          6% {
              -webkit-transform: rotate(18deg);
              -ms-transform: rotate(18deg);
              transform: rotate(18deg)
          }

          8% {
              -webkit-transform: rotate(-22deg);
              -ms-transform: rotate(-22deg);
              transform: rotate(-22deg)
          }

          10% {
              -webkit-transform: rotate(22deg);
              -ms-transform: rotate(22deg);
              transform: rotate(22deg)
          }

          12% {
              -webkit-transform: rotate(-18deg);
              -ms-transform: rotate(-18deg);
              transform: rotate(-18deg)
          }

          14% {
              -webkit-transform: rotate(18deg);
              -ms-transform: rotate(18deg);
              transform: rotate(18deg)
          }

          16% {
              -webkit-transform: rotate(-12deg);
              -ms-transform: rotate(-12deg);
              transform: rotate(-12deg)
          }

          18% {
              -webkit-transform: rotate(12deg);
              -ms-transform: rotate(12deg);
              transform: rotate(12deg)
          }

          100%,
          20% {
              -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              transform: rotate(0deg)
          }
      }

      .faa-parent.animated-hover:hover>.faa-ring,
      .faa-ring.animated,
      .faa-ring.animated-hover:hover {
          -webkit-animation: ring 2s ease infinite;
          animation: ring 2s ease infinite;
          transform-origin-x: 50%;
          transform-origin-y: 0;
          transform-origin-z: initial
      }

      .faa-parent.animated-hover:hover>.faa-ring.faa-fast,
      .faa-ring.animated-hover.faa-fast:hover,
      .faa-ring.animated.faa-fast {
          -webkit-animation: ring 1s ease infinite;
          animation: ring 1s ease infinite
      }

      .faa-parent.animated-hover:hover>.faa-ring.faa-slow,
      .faa-ring.animated-hover.faa-slow:hover,
      .faa-ring.animated.faa-slow {
          -webkit-animation: ring 3s ease infinite;
          animation: ring 3s ease infinite
      }

      @-webkit-keyframes vertical {
          0% {
              -webkit-transform: translate(0, -3px);
              transform: translate(0, -3px)
          }

          4% {
              -webkit-transform: translate(0, 3px);
              transform: translate(0, 3px)
          }

          8% {
              -webkit-transform: translate(0, -3px);
              transform: translate(0, -3px)
          }

          12% {
              -webkit-transform: translate(0, 3px);
              transform: translate(0, 3px)
          }

          16% {
              -webkit-transform: translate(0, -3px);
              transform: translate(0, -3px)
          }

          20% {
              -webkit-transform: translate(0, 3px);
              transform: translate(0, 3px)
          }

          100%,
          22% {
              -webkit-transform: translate(0, 0);
              transform: translate(0, 0)
          }
      }

      @keyframes vertical {
          0% {
              -webkit-transform: translate(0, -3px);
              -ms-transform: translate(0, -3px);
              transform: translate(0, -3px)
          }

          4% {
              -webkit-transform: translate(0, 3px);
              -ms-transform: translate(0, 3px);
              transform: translate(0, 3px)
          }

          8% {
              -webkit-transform: translate(0, -3px);
              -ms-transform: translate(0, -3px);
              transform: translate(0, -3px)
          }

          12% {
              -webkit-transform: translate(0, 3px);
              -ms-transform: translate(0, 3px);
              transform: translate(0, 3px)
          }

          16% {
              -webkit-transform: translate(0, -3px);
              -ms-transform: translate(0, -3px);
              transform: translate(0, -3px)
          }

          20% {
              -webkit-transform: translate(0, 3px);
              -ms-transform: translate(0, 3px);
              transform: translate(0, 3px)
          }

          100%,
          22% {
              -webkit-transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              transform: translate(0, 0)
          }
      }

      .faa-parent.animated-hover:hover>.faa-vertical,
      .faa-vertical.animated,
      .faa-vertical.animated-hover:hover {
          -webkit-animation: vertical 2s ease infinite;
          animation: vertical 2s ease infinite
      }

      .faa-parent.animated-hover:hover>.faa-vertical.faa-fast,
      .faa-vertical.animated-hover.faa-fast:hover,
      .faa-vertical.animated.faa-fast {
          -webkit-animation: vertical 1s ease infinite;
          animation: vertical 1s ease infinite
      }

      .faa-parent.animated-hover:hover>.faa-vertical.faa-slow,
      .faa-vertical.animated-hover.faa-slow:hover,
      .faa-vertical.animated.faa-slow {
          -webkit-animation: vertical 4s ease infinite;
          animation: vertical 4s ease infinite
      }

      @-webkit-keyframes horizontal {
          0% {
              -webkit-transform: translate(0, 0);
              transform: translate(0, 0)
          }

          6% {
              -webkit-transform: translate(5px, 0);
              transform: translate(5px, 0)
          }

          12% {
              -webkit-transform: translate(0, 0);
              transform: translate(0, 0)
          }

          18% {
              -webkit-transform: translate(5px, 0);
              transform: translate(5px, 0)
          }

          24% {
              -webkit-transform: translate(0, 0);
              transform: translate(0, 0)
          }

          30% {
              -webkit-transform: translate(5px, 0);
              transform: translate(5px, 0)
          }

          100%,
          36% {
              -webkit-transform: translate(0, 0);
              transform: translate(0, 0)
          }
      }

      @keyframes horizontal {
          0% {
              -webkit-transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              transform: translate(0, 0)
          }

          6% {
              -webkit-transform: translate(5px, 0);
              -ms-transform: translate(5px, 0);
              transform: translate(5px, 0)
          }

          12% {
              -webkit-transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              transform: translate(0, 0)
          }

          18% {
              -webkit-transform: translate(5px, 0);
              -ms-transform: translate(5px, 0);
              transform: translate(5px, 0)
          }

          24% {
              -webkit-transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              transform: translate(0, 0)
          }

          30% {
              -webkit-transform: translate(5px, 0);
              -ms-transform: translate(5px, 0);
              transform: translate(5px, 0)
          }

          100%,
          36% {
              -webkit-transform: translate(0, 0);
              -ms-transform: translate(0, 0);
              transform: translate(0, 0)
          }
      }

      .faa-horizontal.animated,
      .faa-horizontal.animated-hover:hover,
      .faa-parent.animated-hover:hover>.faa-horizontal {
          -webkit-animation: horizontal 2s ease infinite;
          animation: horizontal 2s ease infinite
      }

      .faa-horizontal.animated-hover.faa-fast:hover,
      .faa-horizontal.animated.faa-fast,
      .faa-parent.animated-hover:hover>.faa-horizontal.faa-fast {
          -webkit-animation: horizontal 1s ease infinite;
          animation: horizontal 1s ease infinite
      }

      .faa-horizontal.animated-hover.faa-slow:hover,
      .faa-horizontal.animated.faa-slow,
      .faa-parent.animated-hover:hover>.faa-horizontal.faa-slow {
          -webkit-animation: horizontal 3s ease infinite;
          animation: horizontal 3s ease infinite
      }

      @-webkit-keyframes flash {

          0%,
          100%,
          50% {
              opacity: 1
          }

          25%,
          75% {
              opacity: 0
          }
      }

      @keyframes flash {

          0%,
          100%,
          50% {
              opacity: 1
          }

          25%,
          75% {
              opacity: 0
          }
      }

      .faa-flash.animated,
      .faa-flash.animated-hover:hover,
      .faa-parent.animated-hover:hover>.faa-flash {
          -webkit-animation: flash 2s ease infinite;
          animation: flash 2s ease infinite
      }

      .faa-flash.animated-hover.faa-fast:hover,
      .faa-flash.animated.faa-fast,
      .faa-parent.animated-hover:hover>.faa-flash.faa-fast {
          -webkit-animation: flash 1s ease infinite;
          animation: flash 1s ease infinite
      }

      .faa-flash.animated-hover.faa-slow:hover,
      .faa-flash.animated.faa-slow,
      .faa-parent.animated-hover:hover>.faa-flash.faa-slow {
          -webkit-animation: flash 3s ease infinite;
          animation: flash 3s ease infinite
      }

      @-webkit-keyframes bounce {

          0%,
          10%,
          100%,
          20%,
          50%,
          80% {
              -webkit-transform: translateY(0);
              transform: translateY(0)
          }

          40%,
          60% {
              -webkit-transform: translateY(-15px);
              transform: translateY(-15px)
          }
      }

      @keyframes bounce {

          0%,
          10%,
          100%,
          20%,
          50%,
          80% {
              -webkit-transform: translateY(0);
              -ms-transform: translateY(0);
              transform: translateY(0)
          }

          40%,
          60% {
              -webkit-transform: translateY(-15px);
              -ms-transform: translateY(-15px);
              transform: translateY(-15px)
          }
      }

      .faa-bounce.animated,
      .faa-bounce.animated-hover:hover,
      .faa-parent.animated-hover:hover>.faa-bounce {
          -webkit-animation: bounce 2s ease infinite;
          animation: bounce 2s ease infinite
      }

      .faa-bounce.animated-hover.faa-fast:hover,
      .faa-bounce.animated.faa-fast,
      .faa-parent.animated-hover:hover>.faa-bounce.faa-fast {
          -webkit-animation: bounce 1s ease infinite;
          animation: bounce 1s ease infinite
      }

      .faa-bounce.animated-hover.faa-slow:hover,
      .faa-bounce.animated.faa-slow,
      .faa-parent.animated-hover:hover>.faa-bounce.faa-slow {
          -webkit-animation: bounce 3s ease infinite;
          animation: bounce 3s ease infinite
      }

      @-webkit-keyframes spin {
          0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg)
          }

          100% {
              -webkit-transform: rotate(359deg);
              transform: rotate(359deg)
          }
      }

      @keyframes spin {
          0% {
              -webkit-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              transform: rotate(0deg)
          }

          100% {
              -webkit-transform: rotate(359deg);
              -ms-transform: rotate(359deg);
              transform: rotate(359deg)
          }
      }

      .faa-parent.animated-hover:hover>.faa-spin,
      .faa-spin.animated,
      .faa-spin.animated-hover:hover {
          -webkit-animation: spin 1.5s linear infinite;
          animation: spin 1.5s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-spin.faa-fast,
      .faa-spin.animated-hover.faa-fast:hover,
      .faa-spin.animated.faa-fast {
          -webkit-animation: spin .7s linear infinite;
          animation: spin .7s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-spin.faa-slow,
      .faa-spin.animated-hover.faa-slow:hover,
      .faa-spin.animated.faa-slow {
          -webkit-animation: spin 2.2s linear infinite;
          animation: spin 2.2s linear infinite
      }

      @-webkit-keyframes float {
          0% {
              -webkit-transform: translateY(0);
              transform: translateY(0)
          }

          50% {
              -webkit-transform: translateY(-6px);
              transform: translateY(-6px)
          }

          100% {
              -webkit-transform: translateY(0);
              transform: translateY(0)
          }
      }

      @keyframes float {
          0% {
              -webkit-transform: translateY(0);
              -ms-transform: translateY(0);
              transform: translateY(0)
          }

          50% {
              -webkit-transform: translateY(-6px);
              -ms-transform: translateY(-6px);
              transform: translateY(-6px)
          }

          100% {
              -webkit-transform: translateY(0);
              -ms-transform: translateY(0);
              transform: translateY(0)
          }
      }

      .faa-float.animated,
      .faa-float.animated-hover:hover,
      .faa-parent.animated-hover:hover>.faa-float {
          -webkit-animation: float 2s linear infinite;
          animation: float 2s linear infinite
      }

      .faa-float.animated-hover.faa-fast:hover,
      .faa-float.animated.faa-fast,
      .faa-parent.animated-hover:hover>.faa-float.faa-fast {
          -webkit-animation: float 1s linear infinite;
          animation: float 1s linear infinite
      }

      .faa-float.animated-hover.faa-slow:hover,
      .faa-float.animated.faa-slow,
      .faa-parent.animated-hover:hover>.faa-float.faa-slow {
          -webkit-animation: float 3s linear infinite;
          animation: float 3s linear infinite
      }

      @-webkit-keyframes pulse {
          0% {
              -webkit-transform: scale(1.1);
              transform: scale(1.1)
          }

          50% {
              -webkit-transform: scale(0.8);
              transform: scale(0.8)
          }

          100% {
              -webkit-transform: scale(1.1);
              transform: scale(1.1)
          }
      }

      @keyframes pulse {
          0% {
              -webkit-transform: scale(1.1);
              -ms-transform: scale(1.1);
              transform: scale(1.1)
          }

          50% {
              -webkit-transform: scale(0.8);
              -ms-transform: scale(0.8);
              transform: scale(0.8)
          }

          100% {
              -webkit-transform: scale(1.1);
              -ms-transform: scale(1.1);
              transform: scale(1.1)
          }
      }

      .faa-parent.animated-hover:hover>.faa-pulse,
      .faa-pulse.animated,
      .faa-pulse.animated-hover:hover {
          -webkit-animation: pulse 2s linear infinite;
          animation: pulse 2s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-pulse.faa-fast,
      .faa-pulse.animated-hover.faa-fast:hover,
      .faa-pulse.animated.faa-fast {
          -webkit-animation: pulse 1s linear infinite;
          animation: pulse 1s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-pulse.faa-slow,
      .faa-pulse.animated-hover.faa-slow:hover,
      .faa-pulse.animated.faa-slow {
          -webkit-animation: pulse 3s linear infinite;
          animation: pulse 3s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-shake,
      .faa-shake.animated,
      .faa-shake.animated-hover:hover {
          -webkit-animation: wrench 2.5s ease infinite;
          animation: wrench 2.5s ease infinite
      }

      .faa-parent.animated-hover:hover>.faa-shake.faa-fast,
      .faa-shake.animated-hover.faa-fast:hover,
      .faa-shake.animated.faa-fast {
          -webkit-animation: wrench 1.2s ease infinite;
          animation: wrench 1.2s ease infinite
      }

      .faa-parent.animated-hover:hover>.faa-shake.faa-slow,
      .faa-shake.animated-hover.faa-slow:hover,
      .faa-shake.animated.faa-slow {
          -webkit-animation: wrench 3.7s ease infinite;
          animation: wrench 3.7s ease infinite
      }

      @-webkit-keyframes tada {
          0% {
              -webkit-transform: scale(1);
              transform: scale(1)
          }

          10%,
          20% {
              -webkit-transform: scale(.9) rotate(-8deg);
              transform: scale(.9) rotate(-8deg)
          }

          30%,
          50%,
          70% {
              -webkit-transform: scale(1.3) rotate(8deg);
              transform: scale(1.3) rotate(8deg)
          }

          40%,
          60% {
              -webkit-transform: scale(1.3) rotate(-8deg);
              transform: scale(1.3) rotate(-8deg)
          }

          100%,
          80% {
              -webkit-transform: scale(1) rotate(0);
              transform: scale(1) rotate(0)
          }
      }

      @keyframes tada {
          0% {
              -webkit-transform: scale(1);
              -ms-transform: scale(1);
              transform: scale(1)
          }

          10%,
          20% {
              -webkit-transform: scale(.9) rotate(-8deg);
              -ms-transform: scale(.9) rotate(-8deg);
              transform: scale(.9) rotate(-8deg)
          }

          30%,
          50%,
          70% {
              -webkit-transform: scale(1.3) rotate(8deg);
              -ms-transform: scale(1.3) rotate(8deg);
              transform: scale(1.3) rotate(8deg)
          }

          40%,
          60% {
              -webkit-transform: scale(1.3) rotate(-8deg);
              -ms-transform: scale(1.3) rotate(-8deg);
              transform: scale(1.3) rotate(-8deg)
          }

          100%,
          80% {
              -webkit-transform: scale(1) rotate(0);
              -ms-transform: scale(1) rotate(0);
              transform: scale(1) rotate(0)
          }
      }

      .faa-parent.animated-hover:hover>.faa-tada,
      .faa-tada.animated,
      .faa-tada.animated-hover:hover {
          -webkit-animation: tada 2s linear infinite;
          animation: tada 2s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-tada.faa-fast,
      .faa-tada.animated-hover.faa-fast:hover,
      .faa-tada.animated.faa-fast {
          -webkit-animation: tada 1s linear infinite;
          animation: tada 1s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-tada.faa-slow,
      .faa-tada.animated-hover.faa-slow:hover,
      .faa-tada.animated.faa-slow {
          -webkit-animation: tada 3s linear infinite;
          animation: tada 3s linear infinite
      }

      @-webkit-keyframes passing {
          0% {
              -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
              opacity: 0
          }

          50% {
              -webkit-transform: translateX(0%);
              transform: translateX(0%);
              opacity: 1
          }

          100% {
              -webkit-transform: translateX(50%);
              transform: translateX(50%);
              opacity: 0
          }
      }

      @keyframes passing {
          0% {
              -webkit-transform: translateX(-50%);
              -ms-transform: translateX(-50%);
              transform: translateX(-50%);
              opacity: 0
          }

          50% {
              -webkit-transform: translateX(0%);
              -ms-transform: translateX(0%);
              transform: translateX(0%);
              opacity: 1
          }

          100% {
              -webkit-transform: translateX(50%);
              -ms-transform: translateX(50%);
              transform: translateX(50%);
              opacity: 0
          }
      }

      .faa-parent.animated-hover:hover>.faa-passing,
      .faa-passing.animated,
      .faa-passing.animated-hover:hover {
          -webkit-animation: passing 2s linear infinite;
          animation: passing 2s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-passing.faa-fast,
      .faa-passing.animated-hover.faa-fast:hover,
      .faa-passing.animated.faa-fast {
          -webkit-animation: passing 1s linear infinite;
          animation: passing 1s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-passing.faa-slow,
      .faa-passing.animated-hover.faa-slow:hover,
      .faa-passing.animated.faa-slow {
          -webkit-animation: passing 3s linear infinite;
          animation: passing 3s linear infinite
      }

      @-webkit-keyframes passing-reverse {
          0% {
              -webkit-transform: translateX(50%);
              transform: translateX(50%);
              opacity: 0
          }

          50% {
              -webkit-transform: translateX(0%);
              transform: translateX(0%);
              opacity: 1
          }

          100% {
              -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
              opacity: 0
          }
      }

      @keyframes passing-reverse {
          0% {
              -webkit-transform: translateX(50%);
              -ms-transform: translateX(50%);
              transform: translateX(50%);
              opacity: 0
          }

          50% {
              -webkit-transform: translateX(0%);
              -ms-transform: translateX(0%);
              transform: translateX(0%);
              opacity: 1
          }

          100% {
              -webkit-transform: translateX(-50%);
              -ms-transform: translateX(-50%);
              transform: translateX(-50%);
              opacity: 0
          }
      }

      .faa-parent.animated-hover:hover>.faa-passing-reverse,
      .faa-passing-reverse.animated,
      .faa-passing-reverse.animated-hover:hover {
          -webkit-animation: passing-reverse 2s linear infinite;
          animation: passing-reverse 2s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-passing-reverse.faa-fast,
      .faa-passing-reverse.animated-hover.faa-fast:hover,
      .faa-passing-reverse.animated.faa-fast {
          -webkit-animation: passing-reverse 1s linear infinite;
          animation: passing-reverse 1s linear infinite
      }

      .faa-parent.animated-hover:hover>.faa-passing-reverse.faa-slow,
      .faa-passing-reverse.animated-hover.faa-slow:hover,
      .faa-passing-reverse.animated.faa-slow {
          -webkit-animation: passing-reverse 3s linear infinite;
          animation: passing-reverse 3s linear infinite
      }

      @-webkit-keyframes burst {
          0% {
              opacity: .6
          }

          50% {
              -webkit-transform: scale(1.8);
              transform: scale(1.8);
              opacity: 0
          }

          100% {
              opacity: 0
          }
      }

      @keyframes burst {
          0% {
              opacity: .6
          }

          50% {
              -webkit-transform: scale(1.8);
              -ms-transform: scale(1.8);
              transform: scale(1.8);
              opacity: 0
          }

          100% {
              opacity: 0
          }
      }

      .faa-burst.animated,
      .faa-burst.animated-hover:hover,
      .faa-parent.animated-hover:hover>.faa-burst {
          -webkit-animation: burst 2s infinite linear;
          animation: burst 2s infinite linear
      }

      .faa-burst.animated-hover.faa-fast:hover,
      .faa-burst.animated.faa-fast,
      .faa-parent.animated-hover:hover>.faa-burst.faa-fast {
          -webkit-animation: burst 1s infinite linear;
          animation: burst 1s infinite linear
      }

      .faa-burst.animated-hover.faa-slow:hover,
      .faa-burst.animated.faa-slow,
      .faa-parent.animated-hover:hover>.faa-burst.faa-slow {
          -webkit-animation: burst 3s infinite linear;
          animation: burst 3s infinite linear
      }

      @-webkit-keyframes falling {
          0% {
              -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
              opacity: 0
          }

          50% {
              -webkit-transform: translateY(0%);
              transform: translateY(0%);
              opacity: 1
          }

          100% {
              -webkit-transform: translateY(50%);
              transform: translateY(50%);
              opacity: 0
          }
      }

      @keyframes falling {
          0% {
              -webkit-transform: translateY(-50%);
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
              opacity: 0
          }

          50% {
              -webkit-transform: translateY(0%);
              -ms-transform: translateY(0%);
              transform: translateY(0%);
              opacity: 1
          }

          100% {
              -webkit-transform: translateY(50%);
              -ms-transform: translateY(50%);
              transform: translateY(50%);
              opacity: 0
          }
      }

      .faa-falling.animated,
      .faa-falling.animated-hover:hover,
      .faa-parent.animated-hover:hover>.faa-falling {
          -webkit-animation: falling 2s linear infinite;
          animation: falling 2s linear infinite
      }

      .faa-falling.animated-hover.faa-fast:hover,
      .faa-falling.animated.faa-fast,
      .faa-parent.animated-hover:hover>.faa-falling.faa-fast {
          -webkit-animation: falling 1s linear infinite;
          animation: falling 1s linear infinite
      }

      .faa-falling.animated-hover.faa-slow:hover,
      .faa-falling.animated.faa-slow,
      .faa-parent.animated-hover:hover>.faa-falling.faa-slow {
          -webkit-animation: falling 3s linear infinite;
          animation: falling 3s linear infinite
      }

      .topButton {
          display: none;
          !important
      }

      #goToTop {
          display: none;
          !important
      }

      .back-to-top {
          cursor: pointer;
          position: fixed;
          right: 80px;
          top: -900px;
          z-index: 2;
          width: 70px;
          height: 900px;
          background: url(https://blog.154451.xyz/scroll.gif);
          transition: all .5s ease-in-out;
          opacity: 1;
      }
  `;
  document.head.appendChild(style);

  btn = document.createElement('div');
  btn.className = 'back-to-top cd-top faa-float animated cd-is-visible';
  btn.style.top = '-999px';
  document.body.appendChild(btn);


  function scrollFunction() {
    if (window.innerWidth < 1000) {
      btn.style.top = '-999px';
    } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.top = '-100px';
    } else {
      btn.style.top = '-999px';
    }
  }
  
  // 滚动时检查是否显示按钮
  window.onscroll = function() {
    scrollFunction();
  };
  
  // 初始检查窗口宽度
  if (window.innerWidth >= 1000) {
    scrollFunction();
  }
  
  // 当窗口大小改变时检查窗口宽度
  window.onresize = function() {
    scrollFunction();
  };

// 回到顶
  btn.addEventListener("click", clickHandler);
  function clickHandler(e) {
      let timer = setInterval(function () {
          var distanceY = document.documentElement.scrollTop || document.body.scrollTop;//兼容
          if (distanceY == 0){
              clearInterval(timer);
              return;
          } 
          var speed = Math.ceil(distanceY/16) + 5;//speed先快后满
          document.documentElement.scrollTop=distanceY-speed;
      }, 10);
  }

});
