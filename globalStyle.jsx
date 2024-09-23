import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        tab-size: 4;
        font-feature-settings: normal;
    }

    :root {
        // Primitive Color
        --Primitive Color-Base-White: rgb(255, 255, 255);
        --Primitive Color-Grey-25: rgb(252, 252, 252);
        --Primitive Color-Grey-50: rgb(249, 250, 251);
        --Primitive Color-Grey-100: rgb(242, 244, 247);
        --Primitive Color-Grey-200: rgb(228, 231, 236);
        --Primitive Color-Grey-300: rgb(208, 213, 221);
        --Primitive Color-Grey-400: rgb(152, 162, 179);
        --Primitive Color-Grey-500: rgb(102, 112, 133);
        --Primitive Color-Grey-600: rgb(71, 84, 103);
        --Primitive Color-Grey-700: rgb(52, 64, 84);
        --Primitive Color-Grey-800: rgb(24, 34, 48);
        --Primitive Color-Grey-900: rgb(16, 24, 40);
        --Primitive Color-Grey-950: rgb(12, 17, 29);
        --Primitive Color-Base-Black: rgb(0, 0, 0);
        --Primitive Color-Base-Transparent: rgba(255, 255, 255, 0.00);

        --Primitive Dark-Modes-Color-Base-White: rgb(255, 255, 255);
        --Primitive Dark-Modes-Color-Grey-25: rgb(250, 250, 250);
        --Primitive Dark-Modes-Color-Grey-50: rgb(245, 245, 246);
        --Primitive Dark-Modes-Color-Grey-100: rgb(240, 241, 241);
        --Primitive Dark-Modes-Color-Grey-200: rgb(236, 236, 237);
        --Primitive Dark-Modes-Color-Grey-300: rgb(206, 207, 210);
        --Primitive Dark-Modes-Color-Grey-400: rgb(148, 150, 156);
        --Primitive Dark-Modes-Color-Grey-500: rgb(133, 136, 142);
        --Primitive Dark-Modes-Color-Grey-600: rgb(97, 100, 108);
        --Primitive Dark-Modes-Color-Grey-700: rgb(51, 55, 65);
        --Primitive Dark-Modes-Color-Grey-800: rgb(31, 36, 47);
        --Primitive Dark-Modes-Color-Grey-900: rgb(22, 27, 38);
        --Primitive Dark-Modes-Color-Grey-950: rgb(12, 17, 29);
        --Primitive Dark-Modes-Color-Base-Black: rgb(0, 0, 0);
        --Primitive Dark-Modes-Color-Base-Transparent: rgba(255, 255, 255, 0.00);

        --Primitive Color-Brands-25: rgb(255, 245, 245);
        --Primitive Color-Brands-50: rgb(255, 238, 239);
        --Primitive Color-Brands-100: rgb(255, 218, 219);
        --Primitive Color-Brands-200: rgb(255, 187, 190);
        --Primitive Color-Brands-300: rgb(255, 139, 143);
        --Primitive Color-Brands-400: rgb(255, 73, 80);
        --Primitive Color-Brands-500: rgb(255, 17, 26);
        --Primitive Color-Brands-600: rgb(255, 0, 10);
        --Primitive Color-Brands-700: rgb(231, 0, 9);
        --Primitive Color-Brands-800: rgb(190, 0, 7);
        --Primitive Color-Brands-900: rgb(134, 0, 5);
        --Primitive Color-Brands-950: rgb(86, 0, 3);

        --Primitive Dark-Modes-Color-Brands-25: rgb(86, 0, 3);
        --Primitive Dark-Modes-Color-Brands-50: rgb(86, 0, 3);
        --Primitive Dark-Modes-Color-Brands-100: rgb(134, 0, 5);
        --Primitive Dark-Modes-Color-Brands-200: rgb(190, 0, 7);
        --Primitive Dark-Modes-Color-Brands-300: rgb(231, 0, 9);
        --Primitive Dark-Modes-Color-Brands-400: rgb(255, 0, 10);
        --Primitive Dark-Modes-Color-Brands-500: rgb(255, 17, 26);
        --Primitive Dark-Modes-Color-Brands-600: rgb(255, 73, 80);
        --Primitive Dark-Modes-Color-Brands-700: rgb(255, 139, 143);
        --Primitive Dark-Modes-Color-Brands-800: rgb(255, 73, 80);
        --Primitive Dark-Modes-Color-Brands-900: rgb(255, 218, 219);
        --Primitive Dark-Modes-Color-Brands-950: rgb(255, 238, 239);

        --Primitive Color-Information-25: rgb(245, 251, 255);
        --Primitive Color-Information-50: rgb(240, 249, 255);
        --Primitive Color-Information-100: rgb(224, 242, 254);
        --Primitive Color-Information-200: rgb(185, 230, 254);
        --Primitive Color-Information-300: rgb(124, 212, 253);
        --Primitive Color-Information-400: rgb(54, 191, 250);
        --Primitive Color-Information-500: rgb(11, 165, 236);
        --Primitive Color-Information-600: rgb(0, 134, 201);
        --Primitive Color-Information-700: rgb(2, 106, 162);
        --Primitive Color-Information-800: rgb(6, 89, 134);
        --Primitive Color-Information-900: rgb(11, 74, 111);
        --Primitive Color-Information-950: rgb(6, 44, 65);

        --Primitive Dark-Modes-Color-Information-25: rgb(6, 44, 65);
        --Primitive Dark-Modes-Color-Information-50: rgb(6, 44, 65);
        --Primitive Dark-Modes-Color-Information-100: rgb(11, 74, 111);
        --Primitive Dark-Modes-Color-Information-200: rgb(6, 89, 134);
        --Primitive Dark-Modes-Color-Information-300: rgb(2, 106, 162);
        --Primitive Dark-Modes-Color-Information-400: rgb(54, 191, 250);
        --Primitive Dark-Modes-Color-Information-500: rgb(11, 165, 236);
        --Primitive Dark-Modes-Color-Information-600: rgb(54, 191, 250);
        --Primitive Dark-Modes-Color-Information-700: rgb(124, 212, 253);
        --Primitive Dark-Modes-Color-Information-800: rgb(185, 230, 254);
        --Primitive Dark-Modes-Color-Information-900: rgb(224, 242, 254);
        --Primitive Dark-Modes-Color-Information-950: rgb(240, 249, 255);

        --Primitive Color-Danger-25: rgb(255, 251, 250);
        --Primitive Color-Danger-50: rgb(254, 243, 242);
        --Primitive Color-Danger-100: rgb(254, 228, 226);
        --Primitive Color-Danger-200: rgb(254, 205, 202);
        --Primitive Color-Danger-300: rgb(253, 162, 155);
        --Primitive Color-Danger-400: rgb(249, 112, 102);
        --Primitive Color-Danger-500: rgb(240, 68, 56);
        --Primitive Color-Danger-600: rgb(217, 45, 32);
        --Primitive Color-Danger-700: rgb(180, 35, 24);
        --Primitive Color-Danger-800: rgb(145, 32, 24);
        --Primitive Color-Danger-900: rgb(122, 39, 26);
        --Primitive Color-Danger-950: rgb(85, 22, 12);

        --Primitive Dark-Modes-Color-Danger-25: rgb(85, 22, 12);
        --Primitive Dark-Modes-Color-Danger-50: rgb(85, 22, 12);
        --Primitive Dark-Modes-Color-Danger-100: rgb(122, 39, 26);
        --Primitive Dark-Modes-Color-Danger-200: rgb(145, 32, 24);
        --Primitive Dark-Modes-Color-Danger-300: rgb(180, 35, 24);
        --Primitive Dark-Modes-Color-Danger-400: rgb(217, 45, 32);
        --Primitive Dark-Modes-Color-Danger-500: rgb(240, 68, 56);
        --Primitive Dark-Modes-Color-Danger-600: rgb(249, 112, 102);
        --Primitive Dark-Modes-Color-Danger-700: rgb(253, 162, 155);
        --Primitive Dark-Modes-Color-Danger-800: rgb(254, 205, 202);
        --Primitive Dark-Modes-Color-Danger-900: rgb(254, 243, 242);
        --Primitive Dark-Modes-Color-Danger-950: rgb(254, 243, 242);

        --Primitive Color-Warning-25: rgb(255, 252, 245);
        --Primitive Color-Warning-50: rgb(255, 250, 235);
        --Primitive Color-Warning-100: rgb(254, 240, 199);
        --Primitive Color-Warning-200: rgb(254, 223, 137);
        --Primitive Color-Warning-300: rgb(254, 200, 75);
        --Primitive Color-Warning-400: rgb(253, 176, 34);
        --Primitive Color-Warning-500: rgb(247, 144, 9);
        --Primitive Color-Warning-600: rgb(220, 104, 3);
        --Primitive Color-Warning-700: rgb(181, 71, 8);
        --Primitive Color-Warning-800: rgb(147, 55, 13);
        --Primitive Color-Warning-900: rgb(121, 46, 13);
        --Primitive Color-Warning-950: rgb(78, 29, 9);

        --Primitive Color-Warning-25: rgb(254, 240, 199);
        --Primitive Color-Warning-50: rgb(254, 240, 199);
        --Primitive Color-Warning-100: rgb(121, 46, 13);
        --Primitive Color-Warning-200: rgb(147, 55, 13);
        --Primitive Color-Warning-300: rgb(181, 71, 8);
        --Primitive Color-Warning-400: rgb(220, 104, 3);
        --Primitive Color-Warning-500: rgb(247, 144, 9);
        --Primitive Color-Warning-600: rgb(253, 176, 34);
        --Primitive Color-Warning-700: rgb(254, 200, 75);
        --Primitive Color-Warning-800: rgb(254, 223, 137);
        --Primitive Color-Warning-900: rgb(254, 240, 199);
        --Primitive Color-Warning-950: rgb(254, 240, 199);

        --Primitive Color-Success-25: rgb(246, 254, 249);
        --Primitive Color-Success-50: rgb(236, 253, 243);
        --Primitive Color-Success-100: rgb(219, 250, 230);
        --Primitive Color-Success-200: rgb(169, 239, 197);
        --Primitive Color-Success-300: rgb(117, 224, 167);
        --Primitive Color-Success-400: rgb(71, 205, 137);
        --Primitive Color-Success-500: rgb(23, 178, 106);
        --Primitive Color-Success-600: rgb(7, 148, 85);
        --Primitive Color-Success-700: rgb(6, 118, 71);
        --Primitive Color-Success-800: rgb(8, 93, 58);
        --Primitive Color-Success-900: rgb(7, 77, 49);
        --Primitive Color-Success-950: rgb(5, 51, 33);

        --Primitive Dark-Modes-Color-Success-25: rgb(5, 51, 33);
        --Primitive Dark-Modes-Color-Success-50: rgb(5, 51, 33);
        --Primitive Dark-Modes-Color-Success-100: rgb(7, 77, 49);
        --Primitive Dark-Modes-Color-Success-200: rgb(8, 93, 58);
        --Primitive Dark-Modes-Color-Success-300: rgb(6, 118, 71);
        --Primitive Dark-Modes-Color-Success-400: rgb(7, 148, 85);
        --Primitive Dark-Modes-Color-Success-500: rgb(23, 178, 106);
        --Primitive Dark-Modes-Color-Success-600: rgb(71, 205, 137);
        --Primitive Dark-Modes-Color-Success-700: rgb(117, 224, 167);
        --Primitive Dark-Modes-Color-Success-800: rgb(169, 239, 197);
        --Primitive Dark-Modes-Color-Success-900: rgb(219, 250, 230);
        --Primitive Dark-Modes-Color-Success-950: rgb(236, 253, 243);

        --Primitive Border-White-10: rgba(255, 255, 255, 0.10);
        --Primitive Border-White-20: rgba(255, 255, 255, 0.20);
        --Primitive Border-White-30: rgba(255, 255, 255, 0.30);
        --Primitive Border-White-40: rgba(255, 255, 255, 0.40);
        --Primitive Border-White-50: rgba(255, 255, 255, 0.50);
        --Primitive Border-White-60: rgba(255, 255, 255, 0.60);
        --Primitive Border-White-70: rgba(255, 255, 255, 0.70);
        --Primitive Border-White-80: rgba(255, 255, 255, 0.80);
        --Primitive Border-White-90: rgba(255, 255, 255, 0.90);
        --Primitive Border-White-100: rgb(255, 255, 255);

        --Primitive Dark-Modes-Border-White-10: rgba(12, 17, 29, 0.10);
        --Primitive Dark-Modes-Border-White-20: rgba(12, 17, 29, 0.20);
        --Primitive Dark-Modes-Border-White-30: rgba(12, 17, 29, 0.30);
        --Primitive Dark-Modes-Border-White-40: rgba(12, 17, 29, 0.40);
        --Primitive Dark-Modes-Border-White-50: rgba(12, 17, 29, 0.50);
        --Primitive Dark-Modes-Border-White-60: rgba(12, 17, 29, 0.60);
        --Primitive Dark-Modes-Border-White-70: rgba(12, 17, 29, 0.70);
        --Primitive Dark-Modes-Border-White-80: rgba(12, 17, 29, 0.80);
        --Primitive Dark-Modes-Border-White-90: rgba(12, 17, 29, 0.90);
        --Primitive Dark-Modes-Border-White-100: #0c111d;

        --Primitive Border-Black-10: rgba(0, 0, 0, 0.10);
        --Primitive Border-Black-20: rgba(0, 0, 0, 0.20);
        --Primitive Border-Black-30: rgba(0, 0, 0, 0.30);
        --Primitive Border-Black-40: rgba(0, 0, 0, 0.40);
        --Primitive Border-Black-50: rgba(0, 0, 0, 0.50);
        --Primitive Border-Black-60: rgba(0, 0, 0, 0.60);
        --Primitive Border-Black-70: rgba(0, 0, 0, 0.70);
        --Primitive Border-Black-80: rgba(0, 0, 0, 0.80);
        --Primitive Border-Black-90: rgba(0, 0, 0, 0.90);
        --Primitive Border-Black-100: rgb(0, 0, 0);

        --Primitive Dark-Modes-Border-Black-10: rgba(255, 255, 255, 0.10);
        --Primitive Dark-Modes-Border-Black-20: rgba(255, 255, 255, 0.20);
        --Primitive Dark-Modes-Border-Black-30: rgba(255, 255, 255, 0.30);
        --Primitive Dark-Modes-Border-Black-40: rgba(255, 255, 255, 0.40);
        --Primitive Dark-Modes-Border-Black-50: rgba(255, 255, 255, 0.50);
        --Primitive Dark-Modes-Border-Black-60: rgba(255, 255, 255, 0.60);
        --Primitive Dark-Modes-Border-Black-70: rgba(255, 255, 255, 0.70);
        --Primitive Dark-Modes-Border-Black-80: rgba(255, 255, 255, 0.80);
        --Primitive Dark-Modes-Border-Black-90: rgba(255, 255, 255, 0.90);
        --Primitive Dark-Modes-Border-Black-100: #ffffff;



        // Background Light Modes
        --Background-bg-primary: var(--Primitive Color-Base-White);
        --Background-bg-secondary: var(--Primitive Color-Grey-50);
        --Background-bg-tertiary: var(--Primitive Color-Grey-100);
        --Background-bg-quaternary: var(--Primitive Color-Grey-200);
        --Background-bg-active: var(--Primitive Color-Grey-50);
        --Background-bg-disabled: var(--Primitive Color-Grey-100);
        --Background-bg-overlay: rgba(12, 17, 29, 0.30);
        --Background-bg-brand-primary: var(--Primitive Color-Brands-600);
        --Background-bg-brand-primary-hover: var(--Primitive Color-Brands-700);
        --Background-bg-brand-secondary: var(--Primitive Color-Base-White);
        --Background-bg-brand-secondary-hover: var(--Primitive Color-Grey-100);
        --Background-bg-brand-tertiary: rgba(255, 255, 255, 0.00);
        --Background-bg-brand-tertiary-hover: rgb(254, 243, 242);
        --Background-bg-brand-neutral: var(--Primitive Color-Base-White);
        --Background-bg-brand-neutral-hover: var(--Primitive Color-Grey-100);

        // Background Dark Modes
        --Background-bg-primary: var(--Primitive Dark-Modes-Color-Grey-950);
        --Background-bg-secondary: var(--Primitive Dark-Modes-Color-Grey-900);
        --Background-bg-tertiary: var(--Primitive Dark-Modes-Color-Grey-800);
        --Background-bg-quaternary: var(--Primitive Dark-Modes-Color-Grey-700);
        --Background-bg-active: var(--Primitive Dark-Modes-Color-Grey-800);
        --Background-bg-disabled: var(--Primitive Dark-Modes-Color-Grey-700);
        --Background-bg-overlay: rgba(31, 36, 47, 0.30);
        --Background-bg-brand-primary: var(--Primitive Dark-Modes-Color-Brands-300);
        --Background-bg-brand-primary-hover: var(--Primitive Dark-Modes-Color-Brands-500);
        --Background-bg-brand-secondary: var(--Primitive Dark-Modes-Color-Grey-950);
        --Background-bg-brand-secondary-hover: var(--Primitive Dark-Modes-Color-Brands-100);
        --Background-bg-brand-tertiary: rgba(0, 0, 0, 0.00);
        --Background-bg-brand-tertiary-hover: rgb(254, 243, 242);
        --Background-bg-brand-neutral: rgb(255, 255, 255);
        --Background-bg-brand-neutral-hover: rgb(255, 255, 255);



        // Label Light Modes
        --Label-label-primary: var(--Primitive Color-Grey-900);
        --Label-label-primary-hover: var(--Primitive Color-Grey-900);
        --Label-label-primary_on-brand: var(--Primitive Color-Base-White);
        --Label-label-secondary: var(--Primitive Color-Grey-700);
        --Label-label-secondary-hover: var(--Primitive Color-Grey-800);
        --Label-label-secondary_on-brand: var(--Primitive Color-Brands-900);
        --Label-label-tertiary: var(--Primitive Color-Grey-600);
        --Label-label-tertiary-hover: var(--Primitive Color-Grey-700);
        --Label-label-tertiary_on-brand: var(--Primitive Color-Brands-900);
        --Label-label-white: var(--Primitive Color-Base-White);
        --Label-label-disabled: var(--Primitive Color-Grey-400);
        --Label-label-placeholder: var(--Primitive Color-Grey-500);
        --Label-label-placeholder_subtle: var(--Primitive Color-Grey-300);
        --Label-label-danger: var(--Primitive Color-Danger-600);
        --Label-label-warning: var(--Primitive Color-Warning-600);
        --Label-label-info: var(--Primitive Color-Information-600);
        --Label-label-success: var(--Primitive Color-Success-600);



        // Label Dark Modes
        --Label-label-primary: var(--Primitive Dark-Modes-Color-Grey-50);
        --Label-label-primary-hover: var(--Primitive Dark-Modes-Color-Grey-50);
        --Label-label-primary_on-brand: var(--Primitive Dark-Modes-Color-Grey-50);
        --Label-label-secondary: var(--Primitive Dark-Modes-Color-Grey-300);
        --Label-label-secondary-hover: var(--Primitive Dark-Modes-Color-Grey-200);
        --Label-label-secondary_on-brand: var(--Primitive Color-Base-White);
        --Label-label-tertiary: rgb(148, 150, 156);
        --Label-label-tertiary-hover: rgb(206, 207, 210);
        --Label-label-tertiary_on-brand: var(--Primitive Dark-Modes-Color-Grey-300);
        --Label-label-white: var(--Primitive Color-Base-White);
        --Label-label-disabled: rgb(133, 136, 142);
        --Label-label-placeholder: rgb(133, 136, 142);
        --Label-label-placeholder_subtle: rgb(51, 55, 65);
        --Label-label-danger: rgb(217, 45, 32);
        --Label-label-warning: rgb(220, 104, 3);
        --Label-label-info: rgb(54, 191, 250);
        --Label-label-success: rgb(7, 148, 85);



        // Border Light Modes
        --Border-border-primary: var(--Primitive Color-Grey-300);
        --Border-border-secondary: var(--Primitive Color-Grey-200);
        --Border-border-tertiary: var(--Primitive Color-Grey-100);
        --Border-border-disabled: var(--Primitive Color-Grey-300);
        --Border-border-brand: var(--Primitive Color-Brands-300);
        --Border-border-brand-solid: var(--Primitive Color-Brands-600);
        --Border-border-error: var(--Primitive Color-Danger-300);
        --Border-border-error-solid: var(--Primitive Color-Danger-600);



        // Border Dark Modes
        --Border-border-primary: rgb(51, 55, 65);
        --Border-border-secondary: rgb(31, 36, 47);
        --Border-border-tertiary: rgb(31, 36, 47);
        --Border-border-disabled: rgb(51, 55, 65);
        --Border-border-brand: var(--Primitive Dark-Modes-Color-Brands-400);
        --Border-border-brand-solid: var(--Primitive Dark-Modes-Color-Brands-500);
        --Border-border-error: var(--Primitive Dark-Modes-Color-Danger-400);
        --Border-border-error-solid: var(--Primitive Dark-Modes-Color-Danger-500);



        // Spacing
        --spacing-none: 0;
        --spacing-xxs: 2;
        --spacing-xs: 4;
        --spacing-sm: 6;
        --spacing-md: 8;
        --spacing-lg: 12;
        --spacing-xl: 16;
        --spacing-2xl: 20;
        --spacing-3xl: 24;
        --spacing-4xl: 32;
        --spacing-5xl: 40;
        --spacing-6xl: 48;
        --spacing-7xl: 64;
        --spacing-8xl: 80;
        --spacing-9xl: 96;
        --spacing-10xl: 128;
        --spacing-11xl: 160;



        // Radius
        --radius-none: 0;
        --radius-xxs: 2;
        --radius-xs: 4;
        --radius-sm: 6;
        --radius-md: 8;
        --radius-lg: 10;
        --radius-xl: 12;
        --radius-2xl: 16;
        --radius-3xl: 20;
        --radius-4xl: 24;
        --radius-full: 9999;



        // Container Padding
        --container-padding-mobile: 16;
        --container-padding-tablet: 32;
        --container-padding-desktop: 32;
        --container-padding-max-desktop: 1280;



        // Font 
        --font-inter: 'Inter', sans-serif;

        --font-size-Display 2xl/Bold: 72px;
        --font-size-Display 2xl/Semibold: 4.5rem;
        --font-size-Display 2xl/Medium: 4.5rem;
        --font-size-Display 2xl/Regular: 4.5rem;

        --font-size-Display xl/Bold: 3.75rem;
        --font-size-Display xl/Semibold: 3.75rem;
        --font-size-Display xl/Medium: 3.75rem;
        --font-size-Display xl/Regular: 3.75rem;

        --font-size-Display lg/Bold: 3rem;
        --font-size-Display lg/Semibold: 3rem;
        --font-size-Display lg/Medium: 3rem;
        --font-size-Display lg/Regular: 3rem;

        --font-size-Display md/Bold: 2.25rem;
        --font-size-Display md/Semibold: 2.25rem;
        --font-size-Display md/Medium: 2.25rem;
        --font-size-Display md/Regular: 2.25rem;

        --font-size-Display sm/Bold: 1.875rem;
        --font-size-Display sm/Semibold: 1.875rem;
        --font-size-Display sm/Medium: 1.875rem;
        --font-size-Display sm/Regular: 1.875rem;

        --font-size-Display xs/Bold: 1.5rem;
        --font-size-Display xs/Semibold: 1.5rem;
        --font-size-Display xs/Medium: 1.5rem;
        --font-size-Display xs/Regular: 1.5rem;
        
        --font-size-Text xl/Bold: 1.25rem;
        --font-size-Text xl/Semibold: 1.25rem;
        --font-size-Text xl/Medium: 1.25rem;
        --font-size-Text xl/Regular: 1.25rem;
        
        --font-size-Text lg/Bold: 1.125rem;
        --font-size-Text lg/Semibold: 1.125rem;
        --font-size-Text lg/Medium: 1.125rem;
        --font-size-Text lg/Regular: 1.125rem;
        
        --font-size-Text md/Bold: 1rem;
        --font-size-Text md/Semibold: 1rem;
        --font-size-Text md/Medium: 1rem;
        --font-size-Text md/Regular: 1rem;
        
        --font-size-Text sm/Bold: .875rem;
        --font-size-Text sm/Semibold: .875rem;
        --font-size-Text sm/Medium: .875rem;
        --font-size-Text sm/Regular: .875rem;
        
        --font-size-Text xs/Bold: .75rem;
        --font-size-Text xs/Semibold: .75rem;
        --font-size-Text xs/Medium: .75rem;
        --font-size-Text xs/Regular: .75rem;



        // Font Weight
        --font-weight-bold: 700;
        --font-weight-semibold: 600;
        --font-weight-medium: 500;
        --font-weight-regular: 400;
        
    }
`;
