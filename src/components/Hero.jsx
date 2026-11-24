import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  ContactShadows,
  Environment,
  RoundedBox,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Globe2,
} from "lucide-react";

import "./Hero.css";

/* =========================================
   3D TRADING TERMINAL
========================================= */

function TradingTerminal() {
  const terminalRef = useRef(null);
  const screenRef = useRef(null);

  useFrame((state, delta) => {
    if (terminalRef.current) {
      terminalRef.current.rotation.y += delta * 0.38;

      terminalRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.45) * 0.035;
    }

    if (screenRef.current) {
      screenRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.35) * 0.006;
    }
  });

  return (
    <Float
      speed={1.3}
      rotationIntensity={0.08}
      floatIntensity={0.16}
    >
      <group ref={terminalRef} rotation={[0.02, -0.4, 0]}>
        {/* Main terminal body */}

        <RoundedBox
          args={[2.35, 2.65, 0.34]}
          radius={0.14}
          smoothness={5}
          position={[0, 0, 0]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#f9fbff"
            roughness={0.25}
            metalness={0.12}
            clearcoat={0.7}
          />
        </RoundedBox>

        {/* Back body accent */}

        <RoundedBox
          args={[2.17, 2.46, 0.07]}
          radius={0.1}
          smoothness={4}
          position={[0, 0, -0.19]}
        >
          <meshStandardMaterial
            color="#dfe8fa"
            roughness={0.35}
          />
        </RoundedBox>

        {/* Screen panel */}

        <RoundedBox
          args={[2.03, 1.76, 0.055]}
          radius={0.08}
          smoothness={5}
          position={[0, 0.34, 0.195]}
        >
          <meshStandardMaterial
            color="#101a35"
            roughness={0.25}
            metalness={0.1}
          />
        </RoundedBox>

        {/* Screen header */}

        <mesh position={[0, 1.08, 0.23]}>
          <boxGeometry args={[1.75, 0.018, 0.012]} />
          <meshBasicMaterial color="#34476e" />
        </mesh>

        {/* Screen status lights */}

        {["#8b5cf6", "#38bdf8", "#facc15"].map(
          (color, index) => (
            <mesh
              key={color}
              position={[-0.78 + index * 0.12, 1.08, 0.25]}
            >
              <sphereGeometry args={[0.025, 16, 16]} />
              <meshBasicMaterial color={color} />
            </mesh>
          )
        )}

        {/* Chart grid - horizontal */}

        {Array.from({ length: 5 }).map((_, index) => (
          <mesh
            key={`horizontal-${index}`}
            position={[0, 0.83 - index * 0.25, 0.24]}
          >
            <boxGeometry args={[1.76, 0.008, 0.006]} />
            <meshBasicMaterial color="#273653" />
          </mesh>
        ))}

        {/* Chart grid - vertical */}

        {Array.from({ length: 7 }).map((_, index) => (
          <mesh
            key={`vertical-${index}`}
            position={[-0.76 + index * 0.25, 0.35, 0.24]}
          >
            <boxGeometry args={[0.007, 1.17, 0.006]} />
            <meshBasicMaterial color="#273653" />
          </mesh>
        ))}

        {/* Chart line */}

        {[
          [-0.73, 0.12],
          [-0.48, 0.27],
          [-0.24, 0.18],
          [0.02, 0.48],
          [0.26, 0.39],
          [0.5, 0.62],
          [0.75, 0.78],
        ].map(([x, y], index, array) => {
          if (index === array.length - 1) return null;

          const next = array[index + 1];

          const dx = next[0] - x;
          const dy = next[1] - y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);

          return (
            <mesh
              key={`line-${index}`}
              position={[
                (x + next[0]) / 2,
                (y + next[1]) / 2,
                0.265,
              ]}
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[length, 0.025, 0.012]} />
              <meshBasicMaterial color="#42d9ff" />
            </mesh>
          );
        })}

        {/* Candlesticks */}

        {[
          { x: -0.66, y: -0.2, h: 0.24, up: true },
          { x: -0.38, y: -0.05, h: 0.36, up: false },
          { x: -0.1, y: 0.02, h: 0.29, up: true },
          { x: 0.18, y: 0.15, h: 0.43, up: true },
          { x: 0.46, y: 0.32, h: 0.34, up: false },
          { x: 0.7, y: 0.49, h: 0.28, up: true },
        ].map((candle, index) => (
          <group key={`candle-${index}`}>
            <mesh
              position={[
                candle.x,
                candle.y,
                0.275,
              ]}
            >
              <boxGeometry
                args={[0.075, candle.h, 0.014]}
              />
              <meshBasicMaterial
                color={candle.up ? "#46e0ad" : "#fb7185"}
              />
            </mesh>

            <mesh
              position={[
                candle.x,
                candle.y,
                0.27,
              ]}
            >
              <boxGeometry
                args={[0.012, candle.h + 0.1, 0.008]}
              />
              <meshBasicMaterial
                color={candle.up ? "#46e0ad" : "#fb7185"}
              />
            </mesh>
          </group>
        ))}

        {/* Screen bottom information bars */}

        <mesh position={[-0.45, -0.65, 0.24]}>
          <boxGeometry args={[0.62, 0.045, 0.01]} />
          <meshBasicMaterial color="#8b5cf6" />
        </mesh>

        <mesh position={[0.38, -0.65, 0.24]}>
          <boxGeometry args={[0.54, 0.045, 0.01]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>

        {/* Bottom control panel */}

        <RoundedBox
          args={[1.6, 0.34, 0.055]}
          radius={0.07}
          smoothness={4}
          position={[0, -0.98, 0.21]}
        >
          <meshStandardMaterial
            color="#edf2fb"
            roughness={0.3}
          />
        </RoundedBox>

        {/* Control lights */}

        {["#8b5cf6", "#38bdf8", "#facc15", "#16c79a"].map(
          (color, index) => (
            <mesh
              key={`control-${index}`}
              position={[-0.48 + index * 0.32, -0.98, 0.25]}
            >
              <sphereGeometry args={[0.045, 20, 20]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </mesh>
          )
        )}

        {/* Side panel */}

        <RoundedBox
          args={[0.12, 0.7, 0.05]}
          radius={0.025}
          smoothness={3}
          position={[1.19, 0.15, 0]}
        >
          <meshStandardMaterial color="#e4eafa" />
        </RoundedBox>

        {/* Power indicator */}

        <mesh position={[0.92, 1.13, 0.19]}>
          <sphereGeometry args={[0.055, 20, 20]} />
          <meshStandardMaterial
            color="#facc15"
            emissive="#facc15"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Small bottom feet */}

        {[-0.65, 0.65].map((x) => (
          <RoundedBox
            key={x}
            args={[0.38, 0.12, 0.4]}
            radius={0.035}
            smoothness={3}
            position={[x, -1.36, 0]}
          >
            <meshStandardMaterial color="#d9e2f2" />
          </RoundedBox>
        ))}
      </group>
    </Float>
  );
}

/* =========================================
   3D SCENE
========================================= */

function TradingScene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={2.2}
        castShadow
      />

      <pointLight
        position={[-4, 2, 3]}
        intensity={1.4}
        color="#8b5cf6"
      />

      <pointLight
        position={[4, -2, 2]}
        intensity={1.1}
        color="#38bdf8"
      />

      <TradingTerminal />

      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.22}
        scale={5}
        blur={2.5}
        far={3}
      />

      <Environment preset="studio" />
    </>
  );
}

/* =========================================
   HERO COMPONENT
========================================= */

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Services",
    "Solutions",
    "FAQs",
  ];

  const tabContent = {
    Overview: {
      title: "Forex Broker Technology Solutions",
      description:
        "Build and manage your brokerage with integrated trading technology, CRM, liquidity connectivity and website development.",
    },

    Services: {
      title: "Technology for Your Brokerage",
      description:
        "Explore MT5 White Label, MT5 Grey Label, Forex CRM, Prop Trading Technology and brokerage website development.",
    },

    Solutions: {
      title: "Build. Operate. Scale.",
      description:
        "Choose technology solutions designed around your brokerage requirements, business model and growth plans.",
    },

    FAQs: {
      title: "Let's Discuss Your Requirements",
      description:
        "Talk to IntelliFX Solutions about your brokerage setup, technology requirements and the solutions available for your business.",
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="ifx-hero">
      {/* Background decoration */}

      <div className="ifx-bg-glow ifx-bg-glow-one" />
      <div className="ifx-bg-glow ifx-bg-glow-two" />
      <div className="ifx-bg-grid" />

      {/* Main hero */}

      <div className="ifx-hero-inner" id="home">
        {/* Giant background heading */}

        <motion.div
          className="ifx-giant-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>FOREX BROKER<span className="ifx-heading-dot">.</span></span>
        </motion.div>

        {/* Left content */}

        <motion.div
          className="ifx-left-content ifx-left-card"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="ifx-eyebrow">
            <span className="ifx-live-dot" />
            YOUR BROKERAGE. YOUR BRAND.
          </div>

          <h1>{currentContent.title}</h1>

          <p>{currentContent.description}</p>

          <div className="ifx-hero-buttons">
            <a
              className="ifx-primary-button"
              href="https://intellifxsolutions.com/contact/"
              target="_blank"
              rel="noreferrer"
            >
              Request Demo
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="ifx-trust-line">
            <CheckCircle2 size={16} />
            <span>
              Technology tailored to your brokerage requirements
            </span>
          </div>
        </motion.div>

        {/* Center 3D object */}

        <motion.div
          className="ifx-product-stage"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <div className="ifx-product-orbit ifx-orbit-one" />
          <div className="ifx-product-orbit ifx-orbit-two" />

          <div className="ifx-product-halo" />

          <div className="ifx-product-canvas">
            <Canvas
              camera={{
                position: [4.5, 2.8, 5.5],
                fov: 35,
              }}
              dpr={[1, 1.7]}
              gl={{
                antialias: true,
                alpha: true,
              }}
            >
              <TradingScene />
            </Canvas>
          </div>

          {/* Product label */}

          <div className="ifx-product-label">
            <span className="ifx-label-indicator" />

            <div>
              <strong>Brokerage Technology</strong>
              <small>Integrated trading infrastructure</small>
            </div>
          </div>

          {/* Small decorative floating badge */}

          <div className="ifx-floating-badge">
            <BarChart3 size={17} />
            <span>Trading Infrastructure</span>
          </div>
        </motion.div>

        {/* Right-side information cards */}

        <motion.aside
          className="ifx-right-cards"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="ifx-preview-card">
            <div className="ifx-preview-top">
              <span className="ifx-card-kicker">
                OUR TECHNOLOGY
              </span>

              <ArrowUpRight size={17} />
            </div>

            <div className="ifx-preview-visual">
              <div className="ifx-mini-screen">
                <div className="ifx-mini-screen-header">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="ifx-mini-chart">
                  {[25, 42, 32, 55, 47, 70, 62, 86, 74].map(
                    (height, index) => (
                      <span
                        key={index}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="ifx-preview-caption">
              <div>
                <strong>Brokerage Solutions</strong>
                <span>Technology for your business</span>
              </div>

              <ArrowRight size={17} />
            </div>
          </div>

          <div className="ifx-stat-card">
            <div className="ifx-stat-top">
              <span>OUR CORE CAPABILITIES</span>
              <Boxes size={18} />
            </div>

            <div className="ifx-stat-number">06</div>

            <h3>Technology Solutions</h3>

            <p>
              From trading platforms to connected brokerage operations.
            </p>

            <div className="ifx-stat-tags">
              <span>MT5</span>
              <span>CRM</span>
              <span>Liquidity</span>
            </div>
          </div>

          <div className="ifx-global-badge">
            <Globe2 size={18} />

            <div>
              <strong>Built for Brokers</strong>
              <span>Launch · Operate · Scale</span>
            </div>
          </div>
        </motion.aside>

        {/* Bottom-left navigation pills */}

        <div className="ifx-bottom-navigation">
          <div className="ifx-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab ? "ifx-tab active" : "ifx-tab"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <span className="ifx-tabs-hint">
            Explore IntelliFX
          </span>
        </div>

        {/* Bottom-right service indicator */}

        <div className="ifx-bottom-note">
          <span className="ifx-note-line" />
          <span>TRADING TECHNOLOGY. CONNECTED.</span>
        </div>
      </div>

      {/* Bottom service strip */}

      <div className="ifx-service-strip" id="services">
        <div className="ifx-strip-heading">
          <span>OUR EXPERTISE</span>
          <strong>One technology partner. Multiple solutions.</strong>
        </div>

        <a href="#solutions">
          <span>01</span>
          MT5 White Label
          <ArrowUpRight size={16} />
        </a>

        <a href="#solutions">
          <span>02</span>
          MT5 Grey Label
          <ArrowUpRight size={16} />
        </a>

        <a href="#solutions">
          <span>03</span>
          Forex CRM
          <ArrowUpRight size={16} />
        </a>

        <a href="#solutions">
          <span>04</span>
          Prop Trading
          <ArrowUpRight size={16} />
        </a>

        <a href="#solutions">
          <span>05</span>
          Liquidity
          <ArrowUpRight size={16} />
        </a>
      </div>

    </section>
  );
}