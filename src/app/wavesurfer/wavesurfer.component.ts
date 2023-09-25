import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wavesurfer',
  templateUrl: './wavesurfer.component.html',
  styleUrls: ['./wavesurfer.component.scss']
})
export class WavesurferComponent implements AfterViewInit {

  // Elemento HTML de waveform
  @ViewChild('waveform', { static: false }) waveformEl: ElementRef<any>;
  // Objeto para interactuar con nuestro audio
  private waveform: WaveSurfer;
  // indicamos si esta reproduciendose o no
  public isPlaying: boolean;

  ngAfterViewInit(): void {

    this.isPlaying = false;
    // Creacion del objeto waveform usando Wavesurfer
    this.waveform = WaveSurfer.create({
      container: this.waveformEl.nativeElement,
      url: './assets/audio/audio.mp3', // ruta del audio
      waveColor: '#4F4A85',
      progressColor: '#383351',
      barWidth: 2,
      barRadius: 2
    });
    this.events();
    
  }

  events(){
    
    // Evento al interactuar con el waveform
    this.waveform.once('interaction', () => {
      this.waveform.play();
    })
    
    // Evento al iniciar con el waveform
    this.waveform.on('play', () => {
      this.isPlaying = true;
    })
    
    // Evento al pausar el audio
    this.waveform.on('pause', () => {
      this.isPlaying = false;
    })
  }

  playAudio(){
    this.waveform.play();
  }

  pauseAudio(){
    this.waveform.pause();
  }

  stopAudio(){
    this.waveform.stop();
  }

}
