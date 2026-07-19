# Budgie Desktop Preview

Interactive browser mockup of the **Budgie Desktop** (Buddies of Budgie 10.x) with the built-in dark panel theme. Static HTML/CSS/JS — no backend.

### Features

- **Layout chooser** (center of screen): switch between the three common Budgie setups
  - **Traditional** — single bottom panel (upstream `panel.ini` default)
  - **Unity-like** — top panel + left icon dock
  - **macOS-like** (Cupertino) — top panel + floating bottom dock
- **Budgie Menu** with search, hover categories, app list, and user/settings/power footer
- **Raven** sidebar (Widgets: Calendar, Sound Output/Input, Media Controls; Notifications)
- Status applets (network, volume, battery/power profiles)
- **Nemo** file manager (Ubuntu Budgie default) with sidebar, icon/list views, navigation
- Desktop icons via budgie-desktop-view style
- Official wallpaper from [budgie-backgrounds](https://github.com/BuddiesOfBudgie/budgie-backgrounds) (`valley-midnight.jpg`)
- Accent color `#6bca81` and panel `#161616` from Budgie’s internal theme

### Run locally

Open `index.html` in a browser.

### Tips

- Use the semi-transparent **Layout** control in the center (becomes solid on hover) to switch layouts
- Click the grid icon for the menu (bottom-left on Traditional; top-left on the others)
- Click the Raven trigger or the clock for widgets; notifications icon opens Raven’s Notifications tab
- Double-click desktop icons or the Files task icon to open Nemo
- `Esc` closes overlays; `Alt+N` toggles Raven
- Chosen layout is remembered in `localStorage`
