import { themeColors } from '../../themeColors';

/**
 * Utility functions for working with theme colors
 */

/**
 * Get a theme color value based on the current theme mode
 * @param colorKey The color key to get from the theme
 * @param isDark Whether to get the dark theme color
 * @returns The color value
 */
export const getThemeColor = (colorKey: keyof typeof themeColors.light, isDark: boolean = false): string => {
  const theme = isDark ? themeColors.dark : themeColors.light;
  return theme[colorKey] as string;
};

/**
 * Get a button theme color value based on the current theme mode
 * @param colorKey The button color key to get from the theme
 * @param isDark Whether to get the dark theme color
 * @returns The color value
 */
export const getButtonColor = (
  colorKey: keyof typeof themeColors.light.button,
  isDark: boolean = false
): string => {
  const theme = isDark ? themeColors.dark : themeColors.light;
  return theme.button[colorKey];
};

/**
 * Check if the current theme is dark mode
 * @returns True if dark mode is active
 */
export const isDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    return document.documentElement.classList.contains('dark');
  }
  return false;
};

/**
 * Toggle dark mode
 * @param isDark Whether to enable dark mode
 */
export const toggleDarkMode = (isDark: boolean): void => {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', String(isDark));
  }
};