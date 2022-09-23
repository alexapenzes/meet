import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('A collapsed event element containing events is loaded on the page.', () => {

        });
        
        when('The user opens the app and performs no action.', () => {

        });
        
        then('The event element is collapsed by default.', () => {

        });
    });
    
    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('The event list and event elements have loaded.', () => {

        });
        
        when('The user clicks on a  details button in the event element.', () => {

        });
        
        then('The event element expands to show details about the specific event chosen.', () => {

        });
    });
    
    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('The event element is showing the event details.', () => {

        });
        
        when('The user clicks on the details button again.', () => {

        });
        
        then('The event details part of the event elemnt is collapsed.', () => {

        });
    });
});