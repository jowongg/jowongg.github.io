#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D uTexture0;
uniform float uTime;
uniform float uSpeed;

varying vec2 vTexCoord;

void main() {
  
  //vTexCoord = fract(vTexCoord);
  
  vec2 texCoord = vTexCoord + vec2(0, uTime*uSpeed);
  texCoord = fract(texCoord);
  
  vec3 color = texture2D( uTexture0, texCoord).rgb;

  gl_FragColor = vec4(color, 1.0);
}