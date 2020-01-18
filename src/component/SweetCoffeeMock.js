import React,{ Component } from "react";

import SweetCoffeeButtons from './SweetCoffeeButtons';
import SweetCoffeeSlider from './SweetCoffeeSlider';
import SweetCoffeeStatus from './SweetCoffeeStatus';

import ErrorComponent from "./ErrorComponent";

import StateContext from '../context/StateContext';
import ButtonContext from '../context/ButtonContext'

export default class SweetCoffeeMachine extends Component {
	
	constructor()  {
		super();

		this.errorState = 1;

		this.errorCallback = this.errorCallback.bind(this);

		// functios to pass down single layer
		this.handleChangeMilk 	= this.handleChangeMilk.bind(this);
		this.handleChangeSugar 	= this.handleChangeSugar.bind(this);

		// functions to be passed down deeper using context
		this.makeAmericano 		= this.makeAmericano.bind(this);
		this.makeCapoccino 		= this.makeCapoccino.bind(this);
		this.makeChoco 			= this.makeChoco.bind(this);
		this.makeWienerMelange 	= this.makeWienerMelange.bind(this);
		this.makeBlackTea 		= this.makeBlackTea.bind(this);
		this.makeEarlGray 		= this.makeEarlGray.bind(this);

		// Object to pass down using the react Context API function to individual buttons
		this.buttonContext = {
			makeAmericano: 		this.makeAmericano,
			makeCapoccino: 		this.makeCapoccino,
			makeChoco: 			this.makeChoco,
			makeWienerMelange: 	this.makeWienerMelange,
			makeBlackTea: 		this.makeBlackTea,
			makeEarlGray: 		this.makeEarlGray
		}

		this.state = {
			menuDisabled: false,
			milk: 0,
			sugar: 0,
			selection: null,
			milkCapacity: 5,
			sugarCapacity: 5
		};
	}
	
	makeAmericano(sugar, milk) {
		
		this.makeSelection('Americano');

		this.readyCallback(() => {

			console.log(`milk: ${milk}`, `sugar ${sugar}`);
			this.resetState();
		});

		return true;
	}
	
	makeCapoccino( sugar, milk ) {

		this.makeSelection('Cappucino');

		this.readyCallback(() => {

			console.log(`milk: ${milk}`, `sugar ${sugar}`);
			this.resetState();
		});

		return true;
	}
	
	makeWienerMelange( sugar, milk ) {

		this.makeSelection('Wiener Melange');

		this.readyCallback(() => {

			console.log(`milk: ${milk}`, `sugar ${sugar}`);
			this.resetState();
		});

		return true;
	}
	
	makeChoco( sugar, milk ) {

		this.makeSelection('Chocolade');

		this.readyCallback(() => {

			console.log(`milk: ${milk}`, `sugar ${sugar}`);
			this.resetState();
		});

		return true;
	}
	
	makeBlackTea( sugar, milk ) {

		this.makeSelection('Zwarte Thee');

		this.readyCallback(() => {

			console.log(`milk: ${milk}`, `sugar ${sugar}`);
			this.resetState();
		});

		return true;
	}
	
	makeEarlGray(sugar, milk) {

		this.makeSelection('Earl Grey');

		this.readyCallback(() => {

			console.log(`milk: ${milk}`, `sugar ${sugar}`);
			this.resetState();
		});

		return true;
	}
	
	errorCallback(callback) {
		let _cbError = callback;
		
		setTimeout(function() {
			_cbError(Math.round(Math.random() * 4));
		}, Math.random() * 60000);
	}
	
	readyCallback(callback) {

		let _cbReady = callback;
		
		setTimeout(function() {
			_cbReady();
		}, Math.random() * 6000);
	}

	handleChangeSugar(e) {

		let value = Number(e.target.innerText);

		this.setState(prevState => {
			return {
				menuDisabled: prevState.menuDisabled,
				milk: prevState.milk,
				sugar: value,
				selection: prevState.selection,
				sugarCapacity: prevState.sugarCapacity,
				milkCapacity: prevState.milkCapacity
			};
		});
	}

	handleChangeMilk(e) {

		let value = Number(e.target.innerText);

		this.setState(prevState => {

			return {
				menuDisabled: prevState.menuDisabled,
				milk: value,
				sugar: prevState.sugar,
				selection: prevState.selection,
				sugarCapacity: prevState.sugarCapacity,
				handleChangeMilk: prevState.milkCapacity
			}
		});
	}

	// Generic way of setting state when selection is made
	// also required to disabled using the state
	makeSelection(selection){

		let newSugarCapactiy = this.state.sugarCapacity - this.state.sugar;
		let newMilkCapacity = this.state.milkCapacity - this.state.milk;

		this.setState(prevState => {
			return {
				menuDisabled: true,
				milk: prevState.milk,
				sugar: prevState.sugar,
				selection: selection,
				sugarCapacity: newSugarCapactiy,
				handleChangeMilk: newMilkCapacity
			} 
		}, () => { console.log(this.state)});
	}

	// needed a function to reset state when machine is done
	// this resets buttons to initial enabled and sliders to 0
	resetState(){

		this.setState(prevState => {
			return {
				menuDisabled: false,
				milk: 0,
				sugar: 0,
				selection: null
			}
		});
	}

	render(){

		let interFace;

		if(this.errorState !== 0){

			interFace = <ErrorComponent errorCode={this.errorState} />
		} else {
			
			interFace = <div className="Interface" >
				<ButtonContext.Provider value={this.buttonContext}>
					<SweetCoffeeButtons />
				</ButtonContext.Provider>
				<SweetCoffeeSlider
					name="Melk"
					handleChange={this.handleChangeMilk}
					value={this.state.milk}
				/>
				<SweetCoffeeSlider
					name="Suiker"
					handleChange={this.handleChangeSugar}
					value={this.state.sugar}
				/>
				<SweetCoffeeStatus status={this.state.selection} />
			</div>
		}
		// StateContext is used to pass down shared state to all the buttons in the interface
		// this gives the abilty to disable all buttons at the same time

		// ButtonContext is used to pass the individual options to button
		// this is done to pass each corresponding method to the preffered
		return(
			<StateContext.Provider value={this.state}>
				{interFace}
			</StateContext.Provider>
		);
	}
}