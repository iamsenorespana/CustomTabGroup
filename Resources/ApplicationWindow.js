function ApplicationWindow(){
	var self, topBar, bottomBar, middleBar,
		btn1, btn2, btn3, btn4, btn5, 
		v1, v2, v3,v4, v5;
	
	self = Ti.UI.createWindow({
		backgroundColor: '#fff'
	});
	
		topBar = Ti.UI.createView({
			top: 0, width: Ti.UI.FILL,
			height: '45dp', backgroundColor: 'purple'
		});
	self.add( topBar );
	
	
		middleBar = Ti.UI.createView({
			top: '45dp', width: Ti.UI.FILL, 
			height: Ti.UI.FILL, backgroundColor: 'orange'
		});
	self.add( middleBar );
	
		var ContentView = require('ContentView');

		
			v2 = new ContentView();
			v2.add( 
				Ti.UI.createLabel({
					text: 'View 2', height: 25, width: Ti.UI.SIZE
				})
			);
			v2.hide();
		middleBar.add( v2 );

			v3 = new ContentView();
			v3.add( 
				Ti.UI.createLabel({
					text: 'View 3', height: 25, width: Ti.UI.SIZE
				})
			);
			v3.hide();
		middleBar.add( v3 );
		
			v4 = new ContentView();
			v4.add( 
				Ti.UI.createLabel({
					text: 'View 4', height: 25, width: Ti.UI.SIZE
				})
			);
			v4.hide();
		middleBar.add( v4 );
		
			v5 = new ContentView();
			v5.add( 
				Ti.UI.createLabel({
					text: 'View 5', height: 25, width: Ti.UI.SIZE
				})
			);
			v5.hide();
		middleBar.add( v5 );	

			v1 = new ContentView();
			v1.add( 
				Ti.UI.createLabel({
					text: 'View 1', height: 25, width: Ti.UI.SIZE
				})
			);
		middleBar.add( v1 );
		
			
		bottomBar = Ti.UI.createView({
			bottom: 0, width: Ti.UI.FILL,
			layout: 'horizontal',
			height: '60dp', backgroundColor: 'yellow'
		});
		
			var Button = require('Button');
			
			btn1 = new Button({
				width: Ti.Platform.displayCaps.platformWidth / 5,
				height: '60dp',
				title: '1',
				buttonNum: 1,
			});
			btn1.addEventListener('click', function(){
				v1.hide();
				v3.hide();
				v4.hide();
				v5.hide();
				v2.hide();
				
				v1.show();
			});
		bottomBar.add( btn1 );
		
			btn2 = new Button({
				width: Ti.Platform.displayCaps.platformWidth / 5,
				height: '60dp',
				title: '2'				
			});
			btn2.addEventListener('click', function(){
				v1.hide();
				v3.hide();
				v4.hide();
				v5.hide();
				v2.hide();
				
				v2.show();
			});
		bottomBar.add( btn2 );

			btn3 = new Button({
				width: Ti.Platform.displayCaps.platformWidth / 5,
				height: '60dp',
				title: '3'				
			});
			btn3.addEventListener('click', function(){
				v1.hide();
				v3.hide();
				v4.hide();
				v5.hide();
				v2.hide();
				
				v3.show();
			});
		bottomBar.add( btn3 );
		
			btn4 = new Button({
				width: Ti.Platform.displayCaps.platformWidth / 5,
				height: '60dp',
				title: '4'				
			});
			btn4.addEventListener('click', function(){
				v1.hide();
				v3.hide();
				v4.hide();
				v5.hide();
				v2.hide();
				
				v4.show();
			});
		bottomBar.add( btn4 );

			btn5 = new Button({
				width: Ti.Platform.displayCaps.platformWidth / 5,
				height: '60dp',
				title: '5'				
			});
			btn5.addEventListener('click', function(){
				v1.hide();
				v3.hide();
				v4.hide();
				v5.hide();
				v2.hide();
				
				v5.show();
			});
		bottomBar.add( btn5 );
					
			
	self.add( bottomBar );
	
	
	
	return self;
};

module.exports = ApplicationWindow;
