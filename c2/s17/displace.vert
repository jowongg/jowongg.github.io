#ifdef GL_ES
precision mediump float;
#endif

// attributes (data from 3D model)
attribute vec3 aPosition;
attribute vec2 aTexCoord;
attribute vec3 aNormal;

// varying (send to .frag file)
varying vec2 vTexCoord;

// uProjectionMatrix 
// calculates perspective effect of the camera
// field of view, aspect ratio, viewing frustrum
// defined when calling perspective() or ortho() function in p5.js
uniform mat4 uProjectionMatrix;

// uModelViewMatrix
// a combination of the model & view matrices
// the view matrix defines the position/direction/orientation of the camera
// the model matrix defines the position/scale/rotation of the model
// together, model-view matrix converts the object coordinates into camera/eye coordinates
// multiplying uModelViewMatrix * vec4(aPosition, 1.0) moves the object into its position in front of the camera
uniform mat4 uModelViewMatrix;

// our texture
uniform sampler2D uTexture0;

// current time (seconds)
uniform float uTime;

uniform float uSpeed;

// how much to displace 
uniform float uDisplacementAmt;

void main() {

  // model vertex/position as vec4
  vec4 positionVec4 = vec4(aPosition.xyz, 1.0);
    
  // send tex coord to .frag
  vTexCoord = aTexCoord;
  
  
  vec2 texCoord = aTexCoord + vec2(0, uTime*uSpeed);
  texCoord = fract(texCoord);
  
  // get the texture & calculate brightness 
  vec3 color = texture2D( uTexture0,  texCoord).rgb;
  float brightness = color.r * 0.1 + color.g * 0.1 + color.b * 0.9;
  
  // use the brightness to calculate the displacement amount
  float displaceAmt = brightness;
  
  displaceAmt -= 0.5;
  //displaceAmt *= sin(  uTime * 3.14156 * 0.5 + aTexCoord.y * 3.14156 *nn2.);
  displaceAmt *= sin( brightness + uTime + aTexCoord.y * 1.0 );
  // step(displaceAmt, uDisplacementAmt)
   displaceAmt = mix(displaceAmt,uDisplacementAmt,displaceAmt* uDisplacementAmt);
  
  // offset the vertex by the brightness (along normal)
  positionVec4 += vec4( aNormal * displaceAmt, 0.0);
  
  // we multiply the position by the model view & projection matrix (the order is important here)
  // send clip position to GPU
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
}