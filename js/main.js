
// Import scenes
import ConfigScene from './scenes/configScene.js';
import TitleScene from './scenes/titleScene.js';
import GameScene from './scenes/gameScene.js';
import ResultScene from './scenes/resultScene.js';

// Game configuration
const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  parent: 'game-container',
  scene: [TitleScene, ConfigScene, GameScene, ResultScene],
  scale: {
    mode: Phaser.Scale.EXACT_FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};

const game = new Phaser.Game(config);
