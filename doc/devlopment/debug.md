# Debugging the Renderer Process with vscode

1. Run `npm start`.
2. While your app is running, you can go to the Debug view and select the 'Electron: Renderer' configuration, which will connect VS Code to the Electron renderer process.
3. When connected, et a breakpoint.
4. Now go to your Electron app window and reload the page (View -> Reload or Cmd/Ctrl+R) to make sure the breakpoints are set.
5. Your breakpoint should now be hit, and you can debug the Renderer process.
