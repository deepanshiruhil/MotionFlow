# Motion Flow 
A website using machine learning neural network that makes use of hands in order to create sounds

Try it out [here](https://motionwavebydeepanshi.vercel.app).


## Features
- Hand Gesture Control: Control pitch and melodic expression using MediaPipe’s hand tracking.
- Harmony Generation: Real-time 4-part harmony generation using a neural network.
- Audio Synthesis: Custom Web Audio API-based vocal synthesis engine with formant filtering.
- Dual hand interaction: Independent controls for pitch, and volume (dominant and non dominant respectively)


## Tech Stack
### Core Framework
- Next.js 15: modern UI+ framework+ app router support 
- React 19: efficient state managenment + rendering 
- TypeScript: Type-safe development+ complex audio+ ML logic 

### ML and Audio
- **MediaPipe Hands**: Google's low-latency hand tracking for consistent gesture detection.
- **Web Audio API**: High-performance audio synthesis and digital signal processing.
- **Web Workers**: Off-thread processing to maintain 60FPS UI performance.

### Styling
- **Tailwind CSS 4**: Cutting-edge utility-first styling for a premium, vintage aesthetic.

Built with Next.js, MediaPipe, and the Web Audio API.

## Project Structure


```
.
├── src/
│   ├── app/            # Next.js App Router pages and components
│   ├── hooks/          # Custom hooks (e.g., useHarmonizer)
│   ├── utils/          # Audio engine and utility logic
│   └── types/          # TypeScript definitions
├── public/
│   └── harmonizer/    # AI models and Web Workers
└── package.json        # Project dependencies and scripts
```

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **A Webcam** (for hand tracking functionality)

## 🔧 Setup & Installation

### Install Dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License
This project is licensed under the GNU General Public License v3.0.

## Author
Built by [deepanshiruhil](https://github.com/deepanshiruhil)
