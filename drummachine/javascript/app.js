const drumSounds_1 = {
  heater1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  heater2: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  heater3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  heater4: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  clap: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  openHighHat: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp',
  kickAndHighHat: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  kick: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  closedHighHat: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
};

const drumSounds_2 = {
  chord1: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  chord2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  chord3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  shaker: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  openHighHat: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  closedHighHat: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  punchyKick: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  sideStick: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  snare: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
};

const Header = () => {
  return (
    <header>
      <h1>React Drum Machine</h1>
    </header>
  );
};

const App = () => (
  <div>
    <Header />
  </div>
);

ReactDOM.render(<App />, document.getElementById('drum-machine'));
