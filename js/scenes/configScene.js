class ConfigScene extends Phaser.Scene {
    constructor() {
      super('ConfigScene');
    }
  
    create() {
      // Create title
      const configTitle = this.add.text(this.cameras.main.centerX, 100, 'Settings', {
        fontSize: '36px',
        color: '#000',
      }).setOrigin(0.5);
  
      // Create volume slider label
      const volumeLabel = this.add.text(150, 250, 'Volume:', {
        fontSize: '24px',
        color: '#000',
      });
  
      // Create volume slider
      const slider = this.add.rectangle(300, 250, 300, 10, 0x000);
      const sliderHandle = this.add.rectangle(300, 250, 20, 20, 0x000).setInteractive();
      this.input.setDraggable(sliderHandle);
  
      // Handle dragging
      sliderHandle.on('drag', (pointer, dragX, dragY) => {
        sliderHandle.x = Phaser.Math.Clamp(dragX, slider.x - slider.width / 2, slider.x + slider.width / 2);
      });
  
      // Back button
      const backButton = this.add.text(this.cameras.main.centerX, 450, 'Back', {
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
  }
  
  export default ConfigScene;
  