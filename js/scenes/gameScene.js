class GameScene extends Phaser.Scene {
    constructor() {
      super('GameScene');
    }
  
    create() {
      // Create timer
      this.startTime = Date.now();
      this.timerText = this.add.text(30, 30, '00:00', {
        fontSize: '24px',
        color: '#000',
      });
  
      // Update timer every second
      this.time.addEvent({
        delay: 1000,
        callback: this.updateTimer,
        callbackScope: this,
        loop: true,
      });
  
      // Generate a sample problem
      const problemText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Sample Problem', {
        fontSize: '36px',
        color: '#000',
      }).setOrigin(0.5);
  
      // TODO: Implement problem generation and handling logic
  
      // Back button
      const backButton = this.add.text(this.cameras.main.centerX, this.cameras.main.height - 50, 'Back', {
        fontSize: '24px',
        color: '#000',
        padding: { x: 10, y: 5 },
        backgroundColor: '#fff',
        borderColor: '#000',
        borderThickness: 2,
      }).setOrigin(0.5).setInteractive();
  
      // Button hover effect
      backButton.on('pointerover', () => backButton.setBackgroundColor('#ddd'));
      backButton.on('pointerout', () => backButton.setBackgroundColor('#fff'));
  
      // Button click event
      backButton.on('pointerup', () => this.scene.start('TitleScene'));
    }
  
    updateTimer() {
      const elapsedSeconds = Math.floor((Date.now() - this.startTime) / 1000);
      const minutes = Math.floor(elapsedSeconds / 60);
      const seconds = elapsedSeconds % 60;
      this.timerText.setText(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }
  }
  
  export default GameScene;
  