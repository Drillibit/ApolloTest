import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import { colors } from '../../helpers/colors';
import { Button } from '../Button';

import { SIGN_UP, CURRENT_USER } from '../../Requests/user';

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const StyledCustomBtn = styled(Button)`
  padding: 0 36px;
`;

const FormField = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 5px 0;
  font-size: 17px;
`;

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  width: 70%;
`;

const StyledLabel = styled.label`
  color: ${colors.grey300};
`;

const StyledVideoContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 125px;
  margin: 0 auto;
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
`;

const StyledVideo = styled.video`
  width: 167px;
  height: 126px;
`;

const MediaHandler = (vid:React.RefObject<HTMLVideoElement>) => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
      if(vid.current) {
        vid.current.srcObject = stream;
        vid.current.play();
      } 
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};

type SignUpState = {
  name?: string
  email?: string
  password?: string
  image?: string
};

export class SignUp extends PureComponent<any, SignUpState> {
  private authCanvas: React.RefObject<HTMLCanvasElement>;
  private authVideo: React.RefObject<HTMLVideoElement>;

  constructor(props:any) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      image: ''
    };
    this.authCanvas = React.createRef();
    this.authVideo = React.createRef();
  }

  componentDidMount() {
    MediaHandler(this.authVideo);
  }

  takePhoto = (e:React.MouseEvent) => {
    e.preventDefault();
    const canvas = this.authCanvas.current;
    const video = this.authVideo.current;
    if(canvas && video) {

      canvas.setAttribute('width', `${video.offsetHeight}`);
      canvas.setAttribute('height', `${video.offsetHeight - 4}`);
  
      const context = canvas.getContext('2d');
      if(context) context.drawImage(video, 0, 0, 167, 120);
  
      const ImageURL = canvas.toDataURL('image/png');
      this.setState({
        image: ImageURL
      });
    }
  }

  handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      name,
      password,
      email,
      image
    } = this.state;
    return (
      <Mutation mutation={SIGN_UP} refetchQueries={[{ query: CURRENT_USER }]}>
        {signUp => (
          <form onSubmit={(e) => {
            e.preventDefault();
            signUp({
              variables: {
                name,
                email,
                password,
                image
              }
            });
          }}
          >
            <FormField>
              <StyledLabel htmlFor="name">Имя:</StyledLabel>
              <FormInput name="name" type="text" onChange={this.handleInputChange} />
            </FormField>
            <FormField>
              <StyledLabel htmlFor="email">Почта:</StyledLabel>
              <FormInput name="email" type="text" onChange={this.handleInputChange} />
            </FormField>
            <FormField>
              <StyledLabel htmlFor="password">Пароль:</StyledLabel>
              <FormInput name="password" type="password" onChange={this.handleInputChange} />
            </FormField>
            <BtnWrapper>
              <StyledCustomBtn btnType="primary">Отправить</StyledCustomBtn>
            </BtnWrapper>
            <div>
              <button onClick={this.takePhoto}>Take Photo</button>
              <StyledVideoContainer>
                <StyledVideo ref={this.authVideo}>What are you looking at?</StyledVideo>
              </StyledVideoContainer>
              <canvas ref={this.authCanvas}></canvas>
            </div>
          </form>
        )}
      </Mutation>
    );
  }
}
