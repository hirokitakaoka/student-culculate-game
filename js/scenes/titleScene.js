const LOGO_FONT_SIZE = 32;
const BUTTON_FONT_SIZE = 24;

class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    console.log('Title scene created');
    // Create title logo
    const titleLogo = this.add.text(0, 0, 'Calculation Puzzle Game', {
      fontSize: `${LOGO_FONT_SIZE * (this.sys.game.canvas.width / 800)}px`, // ベースとなるフォントサイズを16pxとして、キャンバスの幅に応じてフォントサイズを調整する
      color: '#000',
    }).setOrigin(0.5, 0.3).setPosition(this.cameras.main.centerX, this.cameras.main.height * 0.2);

    // Create buttons
    const buttonWidth = this.cameras.main.width * 0.4;
    const buttonHeight = this.cameras.main.height * 0.1;

    const easyButton = this.add.text(0, 0, 'Easy', {
      fontSize: `${BUTTON_FONT_SIZE * (this.sys.game.canvas.width / 800)}px`, // 同様に、ボタンのフォントサイズをキャンバスの幅に応じて調整する
      color: '#000',
      padding: { x: buttonWidth * 0.1, y: buttonHeight * 0.1 },
      backgroundColor: '#fff',
      borderColor: '#000',
      borderThickness: 2,
    }).setOrigin(0.5).setPosition(this.cameras.main.centerX, this.cameras.main.centerY - buttonHeight).setInteractive();

    const mediumButton = this.add.text(0, 0, 'Medium', {
      fontSize: `${BUTTON_FONT_SIZE * (this.sys.game.canvas.width / 800)}px`,
      color: '#000',
      padding: { x: buttonWidth * 0.1, y: buttonHeight * 0.1 },
      backgroundColor: '#fff',
      borderColor: '#000',
      borderThickness: 2,
    }).setOrigin(0.5).setPosition(this.cameras.main.centerX, this.cameras.main.centerY).setInteractive();

    const hardButton = this.add.text(0, 0, 'Hard', {
      fontSize: `${BUTTON_FONT_SIZE * (this.sys.game.canvas.width / 800)}px`,
      color: '#000',
      padding: { x: buttonWidth * 0.1, y: buttonHeight * 0.1 },
      backgroundColor: '#fff',
      borderColor: '#000',
      borderThickness: 2,
    }).setOrigin(0.5).setPosition(this.cameras.main.centerX, this.cameras.main.centerY + buttonHeight).setInteractive();

    // Button hover effects
    [easyButton, mediumButton, hardButton].forEach(button => {
      button.on('pointerover', () => button.setBackgroundColor('#ddd'));
      button.on('pointerout', () => button.setBackgroundColor('#fff'));
    });

    // Button click events
    easyButton.on('pointerup', () => this.startGame('easy'));
    mediumButton.on('pointerup', () => this.startGame('medium'));
    hardButton.on('pointerup', () => this.startGame('hard'));

    // Resize event listener
    window.addEventListener('resize', () => {
      // Update font size for title logo
      titleLogo.setFontSize(LOGO_FONT_SIZE * (this.sys.game.canvas.width / 800));

      // Update font size for buttons
      [easyButton, mediumButton, hardButton].forEach(button => {
      button.setFontSize(BUTTON_FONT_SIZE * (this.sys.game.canvas.width / 800));
      });
    });
  }

  startGame(difficulty) {
    this.scene.start('GameScene', { difficulty });
  }
}

export default TitleScene;