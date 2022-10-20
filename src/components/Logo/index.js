import './index.scss'
import LogoS from '../../assets/images/mepdrawing.png'
import { useEffect, useRef } from 'react'
import { ReactComponent as LogoSvg } from '../../assets/images/svgmep.svg'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap
      .timeline()
      .to(bgRef.current, { duration: 1, opacity: 1 })
      .from(outlineLogoRef.current, { drawSVG: 0, duration: 20 })
    gsap.fromTo(
      solidLogoRef.current,
      { opacity: 0 },
      { opacity: 1, delay: 1, duration: 4 }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={LogoS} alt="MepBIM" ref={solidLogoRef} />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="244.000000pt"
        viewBox="0 0 300.000000 244.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,244.000000) scale(0.100000,-0.100000)"
          fill="none"
          className="svg-container"
        >
          <path
            ref={outlineLogoRef}
            d="M1420 2211 c0 -10 -3 -33 -6 -50 -6 -30 -6 -31 30 -31 20 0 36 -4 36
-9 0 -5 18 -7 40 -4 31 4 41 2 46 -11 5 -13 15 -15 48 -9 22 3 45 12 49 19 11
19 33 18 41 -1 4 -11 20 -15 56 -15 l50 0 0 40 0 40 45 0 c51 0 64 -25 20 -36
-14 -3 -25 -10 -25 -14 0 -8 83 -20 138 -20 31 0 33 -2 30 -32 -3 -30 -6 -33
-40 -36 -32 -3 -38 0 -38 16 0 11 -7 23 -16 26 -23 9 -24 8 -24 -19 0 -24 -3
-25 -57 -25 -44 0 -54 -3 -43 -11 12 -9 11 -9 -5 -3 -11 5 -83 10 -159 12
-106 2 -141 0 -148 -10 -8 -10 -11 -10 -15 0 -2 6 -10 9 -15 5 -6 -3 -67 -5
-136 -4 -94 2 -127 -1 -133 -11 -7 -10 -11 -10 -21 0 -6 6 -37 12 -67 12 -31
0 -79 3 -107 6 -48 6 -50 8 -46 34 4 25 -18 60 -38 60 -12 0 -23 -56 -15 -80
6 -19 2 -20 -67 -21 -40 -1 -143 0 -229 1 -164 2 -199 -5 -199 -43 0 -15 3
-16 23 -5 19 11 48 15 67 8 18 -5 120 -4 120 3 0 4 11 7 25 7 19 0 25 -5 26
-22 1 -17 2 -19 6 -5 5 21 23 23 23 2 0 -18 46 -21 52 -3 4 11 128 31 138 21
10 -10 12 -185 2 -195 -6 -6 -77 -12 -159 -14 -209 -6 -213 -6 -213 -22 0 -11
-12 -12 -55 -7 -46 6 -55 5 -55 -8 0 -12 9 -15 37 -12 21 3 30 2 20 -1 -9 -3
-15 -10 -11 -15 3 -5 9 -7 13 -4 5 2 34 0 65 -5 50 -8 59 -7 76 10 13 13 34
20 59 20 39 0 70 -19 34 -21 -16 0 -16 -1 2 -9 18 -8 17 -9 -6 -9 -15 -1 -30
-8 -33 -17 -9 -25 -6 -31 5 -11 6 10 20 17 32 16 27 -3 67 9 67 20 0 12 58 22
86 15 17 -4 24 -13 24 -29 0 -13 5 -27 10 -30 15 -9 12 -91 -4 -104 -8 -6 -27
-8 -46 -4 -24 4 -31 3 -26 -5 4 -7 0 -13 -11 -13 -10 -1 -34 -3 -53 -5 -98 -8
-148 -9 -144 -2 3 4 0 8 -5 8 -6 0 -11 -4 -11 -10 0 -5 -13 -7 -31 -3 -17 3
-34 2 -38 -3 -3 -5 -21 -15 -40 -21 -26 -9 -32 -10 -23 -1 17 17 15 28 -6 28
-22 0 -42 -19 -42 -40 0 -12 9 -15 40 -12 22 2 40 8 40 12 0 5 9 6 20 3 14 -4
20 0 20 11 0 9 5 16 10 16 6 0 10 -5 10 -11 0 -6 9 -8 20 -4 11 4 20 2 20 -4
0 -6 -12 -11 -27 -12 -16 0 -22 -3 -15 -6 6 -2 12 -11 12 -18 0 -17 -43 -32
-48 -16 -4 13 -62 15 -62 3 0 -10 132 -32 140 -24 3 2 -1 7 -7 9 -18 6 -16 33
2 33 9 0 15 -10 16 -22 1 -16 3 -18 6 -6 2 9 12 19 21 23 30 13 81 23 80 16
-2 -20 4 -30 17 -25 8 4 15 2 15 -3 0 -6 15 -10 33 -11 19 -1 46 -6 61 -12 47
-18 43 -10 -8 15 -28 13 -61 25 -75 27 -35 4 -39 28 -4 29 25 0 26 1 8 9 -13
6 2 7 40 3 33 -3 63 -10 66 -16 4 -5 9 -5 13 2 4 6 11 11 17 11 12 0 12 -37
-1 -45 -7 -4 -7 -13 0 -26 6 -10 7 -19 2 -19 -5 0 -7 -13 -4 -30 2 -16 1 -38
-4 -47 -7 -17 -9 -24 -13 -38 0 -3 -9 3 -20 14 -15 15 -32 18 -84 17 -59 -1
-67 1 -71 19 -2 11 -3 7 -3 -9 2 -23 8 -31 29 -37 16 -4 30 -4 33 1 6 10 73
11 80 0 6 -10 -31 -17 -93 -16 -27 1 -48 -2 -46 -5 7 -12 -50 -17 -74 -6 -18
9 -25 8 -33 -4 -8 -12 -11 -11 -20 4 -12 21 -49 23 -49 2 0 -18 -21 -20 -38
-3 -6 6 -14 9 -18 6 -3 -4 7 -13 23 -22 19 -10 22 -15 11 -16 -25 0 -68 21
-68 34 0 12 -20 -14 -20 -26 0 -5 10 -8 23 -9 21 -1 21 -1 -3 -10 -18 -6 -13
-7 20 -3 61 7 81 14 75 24 -10 17 15 21 37 6 l22 -16 -24 -1 c-14 0 -19 -3
-12 -6 6 -2 13 -19 13 -36 1 -25 3 -27 6 -9 7 36 38 24 37 -13 -1 -19 0 -22 3
-7 5 25 31 30 39 7 4 -8 10 -12 15 -9 6 3 17 0 25 -7 8 -6 17 -10 20 -7 2 3
-10 12 -28 21 -25 12 -29 17 -16 22 9 4 53 -13 107 -39 88 -45 120 -73 63 -57
-17 5 -32 4 -39 -3 -29 -27 -43 -36 -55 -36 -10 0 -10 2 1 9 8 5 9 11 3 15 -6
3 -13 2 -17 -4 -3 -5 -13 -10 -22 -10 -11 0 -14 7 -11 25 5 21 2 25 -13 20
-15 -5 -19 -1 -20 17 -1 20 -2 20 -6 4 -3 -12 2 -25 13 -34 14 -10 15 -16 7
-19 -7 -3 -13 -13 -13 -24 0 -24 -36 -26 -67 -4 -20 14 -23 14 -32 -2 -8 -14
-12 -16 -22 -5 -17 15 -46 16 -51 0 -3 -8 -11 -5 -23 10 -11 12 -24 22 -30 22
-5 -1 5 -14 24 -30 40 -34 36 -44 -17 -45 -35 0 -38 -2 -39 -30 -1 -16 1 -23
3 -15 6 19 61 43 66 28 2 -5 14 0 26 10 14 13 18 22 11 24 -7 2 -10 9 -8 16 3
8 18 2 46 -16 l42 -28 -30 -13 c-25 -11 -29 -18 -29 -52 0 -39 -13 -52 -24
-23 -6 17 -59 16 -54 -1 2 -5 13 -9 26 -7 13 2 25 -4 28 -13 4 -9 19 -15 40
-15 37 0 46 15 14 25 -25 8 -28 60 -4 69 29 11 34 6 35 -41 2 -44 2 -45 8 -14
9 52 44 52 129 1 87 -52 117 -76 105 -83 -5 -3 -45 16 -89 44 -43 27 -65 38
-49 24 17 -14 34 -25 38 -25 5 0 5 -4 2 -10 -3 -5 1 -10 10 -10 9 0 26 -5 37
-11 17 -9 18 -13 7 -21 -12 -8 -11 -9 1 -5 19 6 52 -11 45 -23 -3 -5 -1 -11 5
-15 6 -4 10 8 10 29 0 28 -7 40 -35 62 -20 15 -33 29 -30 32 10 10 -18 32 -41
32 -12 0 -26 5 -29 10 -3 6 -2 10 3 10 6 0 8 9 5 20 -5 18 0 20 42 20 39 0 45
3 36 13 -6 8 -7 17 -3 22 7 7 -53 0 -92 -12 -13 -3 -17 -1 -14 8 3 8 19 14 36
14 18 0 32 3 32 7 0 12 48 10 55 -2 3 -5 14 -9 23 -9 15 1 15 2 0 6 -27 7 -21
20 11 25 27 4 30 1 36 -29 3 -19 3 -43 0 -53 -5 -15 -2 -20 12 -20 10 0 28 -3
41 -6 16 -5 22 -2 22 10 0 9 -6 19 -14 22 -17 7 -27 42 -20 71 5 17 19 23 79
33 40 7 79 10 86 7 8 -3 -5 -8 -28 -12 -51 -9 -54 -18 -13 -35 29 -12 30 -15
32 -79 l2 -66 3 65 c4 57 2 66 -19 81 l-23 17 25 7 c14 3 41 4 60 1 19 -3 38
-5 43 -5 4 -1 7 -11 8 -23 0 -22 1 -22 9 -3 6 15 2 25 -16 41 -33 29 -30 34
14 33 33 -1 34 -2 12 -9 -20 -6 -16 -8 20 -7 25 1 54 -3 65 -8 19 -8 19 -8 3
8 -9 9 -22 17 -29 17 -10 0 -10 3 -1 12 8 8 15 8 24 1 19 -15 71 -26 63 -13
-9 15 27 12 68 -5 31 -13 36 -13 31 -1 -8 20 32 43 88 51 59 9 88 0 89 -28 1
-17 2 -18 6 -4 5 21 8 21 66 1 34 -11 47 -21 47 -35 0 -10 5 -19 10 -19 6 0
10 6 10 14 0 8 6 16 13 19 6 2 -28 17 -77 33 l-89 29 54 12 c67 15 99 8 100
-21 1 -18 2 -18 6 -3 3 10 11 16 18 13 8 -3 32 -10 54 -16 32 -8 41 -16 42
-33 1 -16 3 -17 6 -5 2 9 12 18 21 21 9 2 -17 14 -58 26 -41 13 -79 27 -84 31
-9 9 71 24 100 18 10 -2 21 -14 25 -28 5 -23 6 -23 10 -4 4 20 6 20 56 6 37
-10 53 -20 55 -34 3 -19 3 -19 20 1 16 19 14 20 -65 41 -45 12 -93 28 -107 35
-22 12 -23 14 -7 21 10 3 42 4 70 1 29 -3 46 -3 39 0 -6 2 -10 9 -6 14 7 12
71 12 94 -1 10 -6 42 -12 71 -15 85 -8 131 -25 126 -47 -3 -10 -2 -18 3 -18
10 0 20 39 12 44 -4 2 -22 7 -39 11 -18 3 -33 11 -33 16 0 12 37 11 121 -2 51
-9 69 -16 70 -28 0 -10 2 -12 6 -3 3 7 23 12 48 12 24 0 47 5 50 10 3 6 17 10
29 10 13 0 39 7 57 15 l34 15 -30 -2 c-16 -1 -36 -6 -42 -11 -19 -14 -174 -20
-203 -9 -23 9 -23 11 -6 17 11 5 21 3 27 -6 7 -11 9 -11 9 4 0 19 -6 20 -66 8
-22 -4 -50 -4 -61 0 -18 7 -19 11 -9 53 9 40 14 46 46 54 l35 10 -36 1 -35 1
4 88 c2 48 5 88 6 89 1 2 16 4 32 7 16 2 42 8 57 15 16 6 34 11 42 11 8 0 16
4 19 9 3 4 -28 14 -69 20 l-75 12 0 52 c0 68 10 81 62 83 24 1 50 4 58 7 8 3
22 8 30 10 9 4 6 6 -7 6 -13 1 -23 6 -23 11 0 6 -18 10 -40 10 -22 0 -40 -4
-40 -10 0 -5 -7 -10 -15 -10 -17 0 -19 23 -9 117 l7 61 46 0 c91 1 104 2 97
10 -4 4 -38 7 -74 7 l-67 0 1 38 c1 21 3 40 5 42 3 2 87 7 187 11 100 4 182
10 182 14 0 9 -120 18 -330 26 -85 3 -165 7 -177 10 -28 5 -20 31 10 37 12 2
-63 2 -168 -1 -104 -3 -191 -6 -192 -7 -2 -1 -4 -14 -5 -28 -4 -44 -28 -33
-28 13 0 29 -4 40 -15 40 -18 0 -34 -36 -29 -63 1 -10 -1 -15 -7 -12 -5 4 -8
22 -7 40 2 40 -2 47 -21 35 -8 -4 -14 -22 -13 -39 1 -44 -16 -38 -20 7 -2 25
-8 37 -18 37 -10 0 -16 -12 -18 -37 -4 -51 -22 -48 -22 3 0 33 -3 40 -17 37
-12 -2 -19 -14 -21 -38 -4 -39 -21 -66 -23 -34 -1 10 0 31 1 47 1 26 0 27 -49
27 -43 0 -51 -3 -51 -19z m600 -41 c0 -5 -20 -10 -44 -10 -25 0 -48 5 -51 10
-4 6 13 10 44 10 28 0 51 -4 51 -10z m170 -95 c0 -32 -2 -35 -30 -35 -28 0
-30 3 -30 35 0 32 2 35 30 35 28 0 30 -3 30 -35z m-1692 -62 c-10 -2 -28 -2
-40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m75 0 c-7 -2 -19 -2 -25 0 -7 3 -2 5
12 5 14 0 19 -2 13 -5z m1605 -22 c5 -9 6 -42 4 -74 l-4 -58 -31 3 -32 3 3 65
c1 36 4 70 7 77 5 16 44 5 53 -16z m-1098 0 c0 -11 3 -11 13 3 10 14 21 16 65
10 29 -3 52 -11 52 -17 0 -5 7 -4 16 3 22 19 71 22 87 5 13 -13 16 -13 21 1 4
10 11 12 23 6 18 -8 136 -7 161 3 7 3 22 0 32 -5 11 -6 21 -6 24 -1 9 13 97 6
106 -9 10 -15 21 -15 32 2 8 10 11 10 15 0 2 -6 9 -10 14 -7 5 4 43 8 84 10
l75 4 0 -49 c0 -31 -6 -54 -16 -64 -12 -12 -12 -16 -2 -17 7 -1 2 -5 -12 -9
-33 -10 -61 -11 -35 -1 17 7 15 9 -12 13 -18 2 -30 1 -27 -3 2 -4 0 -10 -6
-14 -5 -3 -10 -1 -10 4 0 6 -4 11 -10 11 -5 0 -10 -6 -10 -14 0 -15 -38 -18
-410 -37 -107 -5 -243 -12 -302 -16 l-108 -6 0 103 0 102 45 -4 c25 -2 45 0
45 3 0 4 11 6 25 5 14 0 25 -7 25 -15z m928 -46 l-2 -65 -38 0 -38 0 0 58 c0
32 2 61 4 63 3 2 21 5 40 6 l36 3 -2 -65z m-43 -85 c3 -5 -3 -10 -14 -10 -12
0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z m-104 -79 c8 12 10 12 19 -1
5 -8 10 -28 10 -44 0 -29 0 -29 -50 -23 -28 3 -52 2 -55 -4 -4 -5 -11 -7 -16
-4 -5 4 -9 1 -9 -4 0 -10 7 -13 28 -10 4 1 6 5 5 10 -4 13 14 11 23 -2 4 -6
20 -8 39 -5 28 6 33 4 31 -11 -2 -9 -9 -20 -17 -24 -15 -8 -193 -26 -328 -34
-46 -2 -99 -9 -117 -15 -18 -6 -92 -13 -165 -15 -73 -2 -135 -8 -138 -13 -8
-12 -123 -23 -161 -16 l-30 7 0 71 c0 109 3 114 63 118 69 5 87 0 88 -26 2
-21 2 -21 6 1 3 17 14 23 49 29 24 3 44 10 44 15 0 5 19 7 43 3 80 -10 87 -13
88 -37 1 -17 2 -18 6 -4 3 11 14 17 33 17 16 0 31 6 33 13 3 7 6 5 6 -5 1 -14
8 -17 34 -14 17 2 31 9 30 15 -2 6 6 11 18 11 11 0 18 -4 14 -9 -11 -19 17
-23 31 -5 9 11 13 14 10 7 -10 -19 11 -25 28 -8 8 9 18 15 21 15 3 -1 22 4 42
9 24 7 41 7 48 1 7 -6 15 -7 18 -3 4 3 7 2 7 -4 0 -5 17 -9 38 -7 20 2 37 3
37 4 0 1 15 2 34 3 20 1 37 8 40 17 4 10 7 7 9 -9 3 -19 6 -21 13 -10z m303 7
c3 -13 6 -42 6 -65 0 -42 0 -43 -35 -43 l-35 0 0 65 c0 65 0 65 29 65 21 0 30
-6 35 -22z m-421 5 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z
m233 -3 c21 0 24 -5 24 -34 0 -31 -3 -34 -35 -38 -48 -5 -55 2 -48 45 4 28 10
37 20 33 8 -4 26 -6 39 -6z m-829 -6 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1
17 -2 13 -5z m-307 -24 l25 -20 -45 1 c-37 1 -41 2 -20 9 25 8 25 8 2 9 -13 1
-20 6 -17 11 9 15 27 12 55 -10z m46 -18 c-4 -3 -11 0 -16 8 -15 24 -11 33 6
15 9 -9 13 -19 10 -23z m117 31 c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35
-2 23 -4z m-483 -43 c0 -13 -11 -13 -30 0 -12 8 -11 10 8 10 12 0 22 -4 22
-10z m60 0 c0 -5 -9 -10 -19 -10 -11 0 -23 5 -26 10 -4 6 5 10 19 10 14 0 26
-4 26 -10z m1403 -27 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z
m6 -19 c8 -8 -7 -15 -43 -21 -32 -5 -36 -3 -36 16 0 20 4 21 38 15 20 -4 39
-8 41 -10z m278 -44 c-2 -30 -27 -34 -27 -5 0 15 6 25 14 25 9 0 14 -9 13 -20z
m-109 -72 l2 -69 -38 3 -37 3 3 50 c1 28 6 51 12 53 5 2 7 9 4 16 -3 8 5 13
24 13 l29 0 1 -69z m-393 39 c0 -7 10 -13 23 -15 12 -2 22 0 22 5 0 4 16 9 35
10 19 2 35 -2 35 -7 0 -6 -4 -10 -9 -10 -5 0 -7 -9 -4 -20 3 -11 0 -20 -6 -20
-6 0 -11 4 -11 8 0 5 -13 7 -30 4 -19 -3 -30 0 -30 8 0 8 -10 10 -34 6 -37 -7
-69 1 -60 15 3 5 16 9 30 9 16 0 24 6 24 17 0 9 3 13 8 9 4 -4 7 -13 7 -19z
m223 6 c-4 -23 -48 -31 -48 -10 0 9 6 18 13 20 25 11 38 7 35 -10z m-59 0 c-4
-25 4 -33 31 -33 31 0 43 -19 13 -21 -11 0 -13 -3 -5 -6 21 -8 13 -23 -13 -21
-14 1 -25 6 -25 10 0 4 -7 8 -15 8 -18 0 -19 9 -5 44 9 24 22 36 19 19z m-293
-38 c5 -12 8 -12 22 2 16 16 17 15 20 -5 2 -16 10 -22 27 -22 13 0 31 -3 41
-7 12 -4 15 -3 10 5 -4 7 -2 12 3 12 6 0 11 -7 11 -15 0 -8 5 -15 10 -15 6 0
10 4 10 8 0 5 21 4 46 -2 43 -10 45 -12 40 -40 -4 -16 -8 -31 -10 -33 -2 -2
-39 -7 -82 -9 -43 -3 -81 -9 -84 -12 -6 -8 -23 -11 -98 -17 -28 -2 -57 -7 -62
-10 -6 -3 -10 -3 -10 2 0 15 -94 2 -107 -14 -9 -12 -32 -16 -93 -16 -44 0 -80
-4 -80 -9 0 -5 -8 -7 -17 -4 -10 3 -31 8 -48 11 -28 6 -29 5 -12 -8 10 -8 14
-18 9 -21 -5 -3 -15 1 -22 9 -7 8 -22 15 -33 15 -20 0 -20 0 -1 -15 18 -14 18
-14 -6 -15 -14 0 -36 -3 -50 -6 -20 -4 -22 -3 -10 5 9 7 10 11 3 11 -6 0 -15
-5 -18 -10 -4 -6 -12 -10 -18 -9 -7 1 -19 0 -27 -4 -8 -3 -29 -8 -46 -11 l-31
-5 -2 81 c-2 80 -2 81 21 74 40 -12 53 -11 53 3 0 8 -16 19 -35 25 -26 7 -30
10 -16 14 15 3 16 6 5 13 -10 6 -1 9 26 8 71 -3 85 -9 86 -38 2 -22 2 -23 6
-4 7 37 27 44 127 46 53 1 96 5 96 10 0 4 14 7 30 7 30 0 43 -23 18 -33 -7 -3
-3 -6 10 -6 15 -1 21 3 16 10 -3 6 0 15 7 20 23 14 28 10 23 -16 -4 -22 -1
-25 26 -25 16 0 30 5 30 11 0 6 6 9 13 6 6 -2 18 2 25 10 11 11 7 13 -27 11
-22 -2 -41 2 -42 7 -3 14 86 27 139 20 24 -2 42 0 42 5 0 16 30 12 36 -5z
m-783 -52 c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2 23 -4z m-146 -9
c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1273 -9 c17 -20 13
-23 -35 -27 -35 -3 -40 0 -43 20 -3 19 1 22 31 22 19 0 40 -7 47 -15z m170
-75 c0 -20 -5 -30 -15 -30 -8 0 -15 -4 -15 -9 0 -5 7 -11 15 -15 15 -6 21 -41
8 -49 -5 -2 -26 1 -48 7 -39 11 -42 17 -36 65 1 5 15 12 31 16 17 4 30 13 30
22 0 12 -2 12 -16 -1 -17 -17 -44 -21 -44 -7 0 10 45 29 73 30 12 1 17 -7 17
-29z m-133 -9 c15 -20 8 -31 -21 -31 -12 0 -28 -6 -34 -12 -10 -10 -6 -15 20
-24 47 -15 48 -34 1 -33 -52 0 -108 21 -108 39 0 11 10 15 35 14 19 -1 29 0
23 3 -7 3 -13 15 -13 28 0 17 8 26 28 33 31 10 52 5 69 -17z m-150 -22 c-1
-10 -8 -19 -15 -19 -12 0 -12 -3 -1 -17 13 -15 12 -16 -11 -9 -65 20 -139 18
-125 -3 3 -5 -1 -12 -7 -15 -7 -3 4 -4 25 -1 25 4 37 2 37 -6 0 -9 4 -8 15 1
11 9 26 9 70 -1 31 -7 58 -16 61 -20 7 -12 -51 -21 -93 -14 -25 4 -33 3 -24
-3 9 -6 -8 -9 -52 -9 -40 0 -63 5 -60 10 4 6 -5 7 -21 3 -21 -5 -26 -3 -26 13
0 26 10 51 21 51 5 0 9 -7 9 -15 0 -8 4 -15 10 -15 5 0 7 7 4 15 -4 8 -1 15 5
15 8 0 8 4 -1 14 -8 9 -15 10 -19 3 -4 -5 -13 -8 -20 -5 -8 2 -22 -4 -31 -14
-15 -15 -15 -18 -3 -18 17 0 20 -26 4 -36 -6 -3 -22 0 -36 7 -22 12 -23 14 -6
21 10 5 -6 6 -39 4 -48 -3 -57 -1 -61 15 -6 21 14 27 113 33 60 5 97 12 143
31 12 5 17 2 17 -9 0 -9 7 -16 15 -16 8 0 15 4 15 10 0 11 60 29 77 23 6 -3
11 -13 10 -24z m-422 -49 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16
-10z m-119 -10 c8 0 14 -7 14 -16 0 -10 -5 -14 -16 -10 -8 3 -13 2 -10 -3 7
-11 -17 -21 -50 -21 -13 0 -24 -4 -24 -9 0 -5 -8 -11 -17 -14 -14 -3 -10 -8
15 -19 38 -17 32 -28 -15 -28 -26 0 -33 4 -33 19 0 24 -24 44 -47 38 -14 -3
-12 -6 10 -11 29 -9 39 -46 12 -46 -17 0 -21 -19 -5 -21 6 -1 14 -2 19 -3 5 0
12 -4 16 -8 10 -9 36 2 29 13 -9 15 52 10 65 -4 9 -11 -7 -18 -86 -37 -54 -13
-113 -24 -133 -24 -19 -1 -39 -5 -43 -11 -6 -6 -10 -5 -14 4 -3 7 -8 9 -12 4
-3 -6 -24 -12 -46 -16 -22 -3 -34 -3 -27 0 11 4 11 7 0 17 -10 8 -13 33 -10
87 l3 77 47 5 c62 7 92 -6 92 -38 0 -18 -5 -25 -20 -25 -24 0 -27 -15 -4 -24
24 -9 34 2 34 40 0 20 5 34 13 34 8 0 7 3 -3 10 -8 5 -12 11 -10 13 9 8 162
27 171 22 5 -4 17 -1 26 4 10 6 24 8 31 6 8 -3 20 -5 28 -5z m50 -4 c19 -20
18 -26 -5 -26 -14 0 -19 6 -18 20 2 24 4 24 23 6z m40 -33 c-10 -10 -19 5 -10
18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m129 -3 c3 -5 12 -7 20 -3 8 3 15 1 15
-5 0 -6 9 -8 19 -5 11 3 28 0 38 -6 17 -10 17 -10 1 -11 -11 0 -18 -8 -18 -20
0 -11 -5 -20 -11 -20 -6 0 -9 7 -5 15 6 18 -19 21 -30 4 -4 -7 -22 -9 -45 -6
-22 3 -37 1 -33 -4 3 -5 -1 -9 -9 -9 -8 0 -13 9 -12 23 2 17 8 22 29 20 14 -1
26 2 26 8 0 5 -6 9 -14 9 -8 0 -18 5 -21 10 -3 6 5 10 19 10 14 0 27 -4 31
-10z m-667 -90 c1 -44 -2 -80 -6 -80 -23 0 -92 38 -96 52 -3 12 -14 18 -35 18
-20 0 -31 5 -31 14 0 7 -7 20 -16 27 -15 12 -14 14 7 20 13 3 33 1 44 -4 11
-5 16 -6 12 -1 -7 7 22 16 114 33 3 1 6 -35 7 -79z m502 58 c0 -5 9 -6 20 -3
17 5 20 2 20 -24 0 -24 -4 -31 -19 -31 -11 0 -23 5 -26 10 -3 6 -15 10 -26 10
-13 0 -19 7 -20 23 0 20 -1 20 -8 3 -5 -12 -10 -16 -14 -9 -15 23 3 39 38 35
19 -2 35 -8 35 -14z m-90 -9 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12
10 9 6 -3 10 -10 10 -16z m440 1 c0 -13 -11 -13 -30 0 -12 8 -11 10 8 10 12 0
22 -4 22 -10z m34 -5 c3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0
6 -7 10 -15z m-104 -5 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10
6 0 10 -4 10 -10z m50 -20 c-29 -8 -40 -4 -40 15 0 11 6 12 33 3 32 -12 32
-12 7 -18z m-1024 6 c29 -21 10 -30 -25 -11 -17 8 -31 18 -31 20 0 11 37 4 56
-9z m-46 -16 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10 11 0 20
-4 20 -10z m689 -1 c17 -6 31 -15 31 -20 0 -11 0 -11 -39 2 -17 6 -31 15 -31
20 0 11 0 11 39 -2z m221 1 c-14 -4 -36 -8 -50 -9 -20 -1 -22 1 -10 9 8 5 31
9 50 9 32 -1 33 -2 10 -9z m-15 -30 c-28 -12 -67 -12 -60 0 3 6 23 10 43 9 30
0 33 -2 17 -9z m-155 -28 c0 -4 -10 -9 -22 -9 -18 -2 -20 0 -8 7 18 12 30 13
30 2z m-570 -72 c0 -5 -10 -10 -22 -9 -22 0 -22 1 -3 9 11 5 21 9 23 9 1 1 2
-3 2 -9z m-125 -20 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0
13 -4 16 -10z m-100 -20 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10
6 0 13 -4 16 -10z m68 -34 c9 -7 17 -19 17 -27 0 -12 2 -12 9 0 6 10 10 10 16
1 4 -6 3 -16 -3 -22 -7 -7 -25 -2 -56 18 -25 16 -45 32 -46 37 0 12 44 7 63
-7z m-36 -42 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo