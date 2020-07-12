import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'baseui/layout-grid';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Block } from 'baseui/block';
import { Button, SIZE, KIND, SHAPE } from 'baseui/button';
import { Paragraph3, Label2 } from 'baseui/typography';
import { FormControl } from "baseui/form-control";
import { Input } from 'baseui/input';
import { validate as validateEmail } from 'email-validator'; 
import { StyledLink } from "baseui/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebookF,faGoogle ,faTwitter,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { compose } from 'redux'
import { firebaseConnect, } from 'react-redux-firebase'
import * as ROUTES from '../../../utils/routes'
const defaultProps = {};

/**
 * 
 */
const socialProps = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
}
const itemProps = {
    //  backgroundColor: 'mono300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
};
const narrowItemProps = {
    ...itemProps,
    overrides: {
        Block: {
            style: ({ $theme }) => ({
                width: $theme.sizing.scale650,
                flexGrow: 0,
            }),
        },
    },
};
const INITIAL_STATE = {
    email:'',
    password:'',
    error:'',
    isEmailVisited:false,
    isEmailValid:false,
    isSubmiting:false

}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}

        this.setIsVisited = this.setIsVisited.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onGoogleSignIn = this.onGoogleSignIn.bind(this)


    }

    setIsVisited(value){
        this.setState({isEmailVisited:value})
    }

    onSubmit(event){
        event.preventDefault();
        const { email, password,isEmailValid } = this.state;
        this.setState({isSubmiting:true,error:''})
        if(!isEmailValid) return ;
        this.props.firebase
          .login({email, password})
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push('/');
          })
          .catch(error => {
            this.setState({ error:error.message ,isSubmiting:false});
          });
     
    }

    getError(){
        return this.state.error?<p style={{color:'red'}}>{this.state.error}</p>:null
    }
    onChange(event ){
        this.setState({ [event.target.name]: event.target.value });
        if(event.target.name==='email'){
            this.setState({isEmailValid:validateEmail(event.target.value )})
        }
      };
      onGoogleSignIn(){
        this.props.firebase.login({
            provider: 'google',
            type: 'popup',
          }).then(
            (authUser)=>{
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/');
            }
        ).catch(error => {
            this.setState((currentState)=>({...currentState,error:error.message ,isSubmiting:false }));
          });
             
    }
    linktoSignUP = ()=>{
        this.props.history.push(ROUTES.REGISTER);
    }
    render() {
        const { email, password ,isEmailValid,isEmailVisited,isSubmiting} = this.state;
         return <Block flex='2' flexDirection='row' width='100%' height='100%'>
            <Grid
                overrides={{
                    Grid: {
                        style: ({ $theme }) => ({
                            paddingTop: '3vh',
                            paddingBottom: '3vh'
                        }),
                    },
                }}

            >
                <Cell span={6}>
                    <Button size={SIZE.compact} kind={KIND.secondary} overrides={{ BaseButton: { style: {borderRadius:'4px' } } }} as='a' onClick={this.linktoSignUP}>Sign up</Button>
                    <Block height='16vh'></Block>
                    <Label2 color='contentSecondary' >
                        welcome back
                </Label2>
                    <h1 style={{ marginTop: 'scale650', marginBottom: 'scale650' }}>Login to your personal account.</h1>
                    <Block height='45vh'></Block>
                    <Label2 color='contentSecondary' > Our social networks   </Label2>
                </Cell>
                <Cell span={6} >
                    <Block height='24vh'></Block>
                    {this.getError()}
                    <form onSubmit={this.onSubmit}>
                    <FormControl overrides={{
                            ControlContainer:{
                                style:{
                                    margin:'0px',
                                }
                               
                            },
                            Caption:{
                               margin:'0px' 
                            }
                        }} error={
                            isEmailVisited && !isEmailValid
                                ? 'Please input a valid email address'
                                : null}>
                    
                    <Input
                         value={email}
                         onChange={this.onChange}
                        placeholder="Email Address"
                        type="email"
                        name='email'
                        required={true}
                        onBlur={() => this.setIsVisited(true)}
                        overrides={{
                            InputContainer:{
                                style:{
                                    borderRadius:'4px'
                                }
                            }
                        }}

                    />
                    </FormControl>
                    <Block height='2vh'></Block>
                    <Input
                        value={password}
                        onChange={this.onChange}
                        name='password'
                        type="password"
                        required={true}
                        placeholder="Password"
                        overrides={{
                            InputContainer:{
                                style:{
                                    borderRadius:'4px'
                                }
                            }
                        }}
                    />
                    
                    <Block height='2vh'></Block>
                    <FlexGrid
                        flexGridColumnCount={2}
                        flexGridColumnGap="scale800"
                        flexGridRowGap="scale800">
                        <FlexGridItem {...itemProps}>
                            <Button overrides={{ BaseButton: { style: { width: '80%',borderRadius:'4px' } } }} isLoading={isSubmiting}>
                                Login
                            </Button>
                        </FlexGridItem>
                        <FlexGridItem {...itemProps}>
                            <StyledLink href="#forgotpassword" color='contentSecondary'>
                                forgot password ?
                            </StyledLink>
                        </FlexGridItem>

                    </FlexGrid>
                    </form>
                    <FlexGrid
                        flexGridColumnCount={3}
                        flexGridColumnGap="scale100"
                        flexGridRowGap="scale100">
                        <FlexGridItem {...itemProps}>
                            <Block height='0.35vh' backgroundColor='#F4F4F4' marginTop='6vh' marginBottom='6vh' width='100%'></Block>
                        </FlexGridItem>
                        <FlexGridItem {...narrowItemProps}>
                            <Paragraph3 >
                                OR
                            </Paragraph3>
                        </FlexGridItem>
                        <FlexGridItem {...itemProps}>
                            <Block height='0.35vh' backgroundColor='#F4F4F4' marginTop='6vh' marginBottom='6vh' width='100%'></Block>
                        </FlexGridItem>

                    </FlexGrid>

                    <Button overrides={{ BaseButton: { style: { width: '100%',borderRadius:'4px' } } }} startEnhancer={() =>  <FontAwesomeIcon icon={faGoogle} />}  onClick={this.onGoogleSignIn}>
                        Login with Google
                    </Button>

                    <Block height='16vh'></Block>
                    <FlexGrid
                        flexGridColumnCount={6}
                        flexGridColumnGap="scale100"
                        flexGridRowGap="scale100">
                        <FlexGridItem {...socialProps}>
                            <Button shape={SHAPE.round} kind={KIND.secondary} $as="a" href="https://witsmind.com/" target="_blank">
                                
                                <FontAwesomeIcon icon={faInstagram} />
                            
                            </Button>
                        </FlexGridItem>
                        <FlexGridItem {...socialProps}>
                            <Button shape={SHAPE.round} kind={KIND.secondary} $as="a" href="https://witsmind.com/" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                            </Button>
                        </FlexGridItem>
                        <FlexGridItem {...socialProps}>
                            <Button shape={SHAPE.round} kind={KIND.secondary} $as="a" href="https://witsmind.com/" target="_blank">
                            <FontAwesomeIcon icon={faGoogle} />
                            </Button>
                        </FlexGridItem>
                        <FlexGridItem {...socialProps}>
                            <Button shape={SHAPE.round} kind={KIND.secondary} $as="a" href="https://witsmind.com/" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                            </Button>
                        </FlexGridItem>
                        <FlexGridItem {...socialProps}>
                            <Button shape={SHAPE.round} kind={KIND.secondary} $as="a" href="https://witsmind.com/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            </Button>
                        </FlexGridItem>
                    </FlexGrid>
                 </Cell>
            </Grid>

        </Block>;
    }
}

Login.propTypes = {
    auth: PropTypes.object,
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired,
    })}
Login.defaultProps = defaultProps;


export default compose(
    // connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect()
  )(Login);