import React, { Component } from 'react';
import logo from './logo.svg'; 
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,FormGroup,
        ControlLabel,FormControl,HelpBlock,Checkbox,Radio,Grid,Row,Col} from 'react-bootstrap';


class App extends Component {
  
  state ={
    name:"",
    color:"",
    movies:[],
    gender:"",
    motto:"",
    car:[],
    meal:""
     
    
  };
  
  onChange = (fieldName)=>{
        return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
}
  };
  
  
CheckboxChange = (fieldName)=>{
  return (event)=>{
    var targetArray= this.state[fieldName];
    if(targetArray.indexOf(event.target.value)>=0)
    targetArray.splice(
    targetArray.indexOf(event.target.value),
    1
  
    );
else

targetArray.push(event.target.value);
  
  var state=this.state;
  state[fieldName]=targetArray;
  this.setState(state);
}
};
  
  render() {
    
    return (
      <div className="container">
        <div className="page-header">
      
          <h2>Welcome to Student Survey!</h2>
        </div>
        <p className="jumbotron">
        
        <Grid>
        <Row>
            <Col md={6}>
                <Form>
        <FormGroup>
        <ControlLabel> Name Please...</ControlLabel>
        <FormControl type="text" 
        placeholder="Name here"
        value={this.state.name}
        onChange={this.onChange('name')}
        />
        <HelpBlock>Use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel> Choose Favorite Color</ControlLabel>
        <FormControl componentClass="select" placeholder="Color here"
        value={this.state.color}
        onChange={this.onChange('color')}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Black">Black</option>
        <option value="Green">Green</option></FormControl>
        <HelpBlock>Use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Movies</ControlLabel>
        <Checkbox value="Harry Potter"
                  checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
                  onChange={this.CheckboxChange('movies')}>Harry Potter</Checkbox>
                  
         <Checkbox value="Mechanics"
                  checked={this.state.movies.indexOf('Mechanics')>=0 ? true:false}
                  onChange={this.CheckboxChange('movies')}>Mechanics</Checkbox> 
        
        <Checkbox value="Deadpool"
                  checked={this.state.movies.indexOf('Deadpool')>=0 ? true:false}
                  onChange={this.CheckboxChange('movies')}>Deadpool</Checkbox>
        
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Gender</ControlLabel>
        <Radio name="gender" value="Male"
        onChange={this.onChange('gender')}>Male</Radio>
        <Radio name="gender" value="Female"
        onChange={this.onChange('gender')}>Female</Radio>
        </FormGroup>
        
          To get started, edit <code>src/App.js</code> and save to reload.
        
        
          <Button bsStyle="info">InfoButton</Button>
          <Button bsStyle="primary">InfoButton</Button>
          <Button bsStyle="warning">InfoButton</Button>
          <Button bsStyle="danger">InfoButton</Button>
         
          
          <Button bsStyle="info" bsSize="large">InfoButton</Button>
          <Button bsStyle="primary" bsSize="small">InfoButton</Button>
          <Button bsStyle="warning" bsSize="xsmall">InfoButton</Button>
          <Button bsStyle="danger">InfoButton</Button>
          
          <ButtonGroup>
           <Button bsStyle="info">
           <span className="glyphicon glyphicon-star"></span>
          InfoButton</Button>
          <Button bsStyle="primary">
           <span className="glyphicon glyphicon-user"></span>
          InfoButton</Button>
          <Button bsStyle="warning">
          <span className="glyphicon glyphicon-flag"></span>
          InfoButton</Button>
          <Button bsStyle="danger">
          <span className="glyphicon glyphicon-barcode"></span>
          InfoButton</Button>
          </ButtonGroup>
          
        ----------------------------------------------------------------------------
        
        
        
          <FormGroup>
        <ControlLabel>Your motto in life</ControlLabel>
        <FormControl type="text" 
        placeholder="State your motto here"
        value={this.state.motto}
        onChange={this.onChange('motto')}
        />
        <HelpBlock>Reflect to yourself!</HelpBlock>
        </FormGroup>
          
          <FormGroup>
        <ControlLabel>Favorite Car</ControlLabel>
        <Checkbox value="Bugatti"
                  checked={this.state.car.indexOf('Bugatti')>=0 ? true:false}
                  onChange={this.CheckboxChange('car')}>Bugatti</Checkbox>
                  
         <Checkbox value="Audi"
                  checked={this.state.car.indexOf('Audi')>=0 ? true:false}
                  onChange={this.CheckboxChange('car')}>Audi</Checkbox> 
        
        <Checkbox value="Aston Martin"
                  checked={this.state.car.indexOf('Aston Martin')>=0 ? true:false}
                  onChange={this.CheckboxChange('car')}>Aston Martin</Checkbox>
       
        <Checkbox value="Bentley"
                  checked={this.state.car.indexOf('Bentley')>=0 ? true:false}
                  onChange={this.CheckboxChange('car')}>Bentley</Checkbox>
        
        </FormGroup>
        
        
        <FormGroup>
        <ControlLabel>What is the important meal for you?</ControlLabel>
        <Radio name="Meal" value="Breakfast"
        onChange={this.onChange('meal')}>Breakfast</Radio>
        <Radio name="Meal" value="Lunch"
        onChange={this.onChange('meal')}>Lunch</Radio>
        <Radio name="Meal" value="Dinner"
        onChange={this.onChange('meal')}>Dinner</Radio>
        </FormGroup>
        
          
          
          
          
          
          
          </Form>
            
            
            </Col>
              <Col md={6}>
              <strong>Your name is {this.state.name}</strong><br/>
                 <strong>Your Favorite Color {this.state.color}</strong><br/>
                    <strong>Your Favorite Movies {this.state.movies.map((item,i)=>{
                      return <div>
                    <h3><span className="label label-success">{item}</span></h3>
                    
                  </div>
                })
                    }</strong><br/>
                       <strong>Your Gender {this.state.gender}</strong><br/>
                        <strong>Your motto:{this.state.motto}</strong><br/>
                  
                  <strong>Your Favorite Cars{this.state.car.map((item,i)=>{
                      return <div>
                    <h3><span className="label label-danger">{item}</span></h3>
                    
                  </div>
                })
                    }</strong><br/>
                                                                                                
             <strong>Your Favorite Meal time:{this.state.meal}</strong><br/>
            </Col>
            </Row>
            </Grid>
            
            
            
       
       
          
        </p>
      </div>
    );
  }
}

export default App;
