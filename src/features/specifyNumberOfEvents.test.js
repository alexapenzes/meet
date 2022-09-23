import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('The app has loaded', () => {

        });
        
        when('The user has yet to choose a number of events in the input box.', () => {

        });
        
        then(/^A default number of (\d+) events is loaded on the page.$/, (arg0) => {

        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('The app has loaded.', () => {

        });
        
        when('User changes the number of events in the input box.', () => {

        });
        
        then('The event list elements shows the number of events set by the user.', () => {

        });
    });
});