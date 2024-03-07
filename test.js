import {InteractionDrawer} from './src/InteractionDrawer.js'

//set options as you like, see also Options.md
const opts = {
    textSize: 6.5,
    colors: {
        ionicInteractions: '#ff00ff',
        AL: '#BFA6A6'
    }
};
//initialize the drawer
const drawer = new InteractionDrawer.Drawer('draw-area', opts);

drawer.addByFile("test.pdb", "LIG");