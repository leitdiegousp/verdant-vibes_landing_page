import type { Config } from "tailwindcss";
// Removido import de defaultTheme para evitar erro de módulo
import tailwindcssAnimate from "tailwindcss-animate"; // Importado tailwindcss-animate

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
		    fontFamily: {
		      // Definindo Roboto com fallbacks manuais
		      sans: [
		        'Roboto', // Alterado para Roboto
		        'ui-sans-serif',
		        'system-ui',
		        '-apple-system',
		        'BlinkMacSystemFont',
		        '"Segoe UI"',
		        'Roboto',
		        '"Helvetica Neue"',
		        'Arial',
		        '"Noto Sans"',
		        'sans-serif',
		        '"Apple Color Emoji"',
		        '"Segoe UI Emoji"',
		        '"Segoe UI Symbol"',
		        '"Noto Color Emoji"'
		      ],
		    },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				garden: {
					50: '#f0f9f1',
					100: '#dcf1de',
					200: '#bae3bf',
					300: '#8ccf94',
					400: '#58b364',
					500: '#3a9a48',
					600: '#2a7c37',
					700: '#25642f',
					800: '#225029',
					900: '#1e4324',
					950: '#0d2412',
				},
				soil: {
					50: '#f8f7f4',
					100: '#efeae1',
					200: '#ded2c0',
					300: '#cbb59a',
					400: '#b89671',
					500: '#aa8260',
					600: '#9a6e50',
					700: '#805944',
					800: '#6c4a3c',
					900: '#5a3e34',
					950: '#2f1f1a',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'image-glow': {
					'0%': {
						opacity: '0',
						'box-shadow': '0 0 0 0 rgba(56, 178, 72, 0)'
					},
					'30%': {
						opacity: '1',
						'box-shadow': '0 0 30px 0 rgba(56, 178, 72, 0.3)'
					},
					'100%': {
						opacity: '1',
						'box-shadow': '0 0 30px 0 rgba(56, 178, 72, 0)'
					}
				},
				'rotate-leaf': {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(5deg)' },
					'75%': { transform: 'rotate(-5deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'image-glow': 'image-glow 3s ease-in-out infinite',
				'rotate-leaf': 'rotate-leaf 4s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': "url('/lovable-uploads/8bafa970-a380-48fd-add9-3371fcf6db73.png')"
			}
		}
	},
	plugins: [
		tailwindcssAnimate, // Usando a variável importada
		function({ addComponents }) {
			addComponents({
				'.blob-shape': {
					borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
					overflow: 'hidden',
					position: 'relative',
					boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
					transition: 'all 0.3s ease',
					'&:hover': {
						borderRadius: '48% 52% 39% 61% / 45% 55% 45% 55%',
					}
				},
				'.thick-pen-shape': {
					borderRadius: '70% 30% 65% 35% / 60% 40% 60% 40%',
					overflow: 'hidden',
					position: 'relative',
					width: '110%',
					height: '110%',
					boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
					transition: 'all 0.4s ease',
					'&:hover': {
						borderRadius: '45% 55% 40% 60% / 50% 50% 50% 50%',
					}
				},
			});
		}
	],
} satisfies Config;
