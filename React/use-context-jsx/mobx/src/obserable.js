import { observable } from 'mobx';

export const themeStore = observable({
  isDarkMode: false,

  toggleTheme () {
    this.isDarkMode = !this.isDarkMode;
  }
})
