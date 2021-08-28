import React from "react";
import { View } from "react-native";
import ContactsHeaderItem from "../../components/ContactsHeaderItem/ContactsHeaderItem";
import Contact from "../../components/Contact/Contact";

const ContactsScreen = () => {
    return (
        <View>
            <ContactsHeaderItem
                icon="addusergroup"
                title="New group"
                navigationTarget="Home"
            />
            <ContactsHeaderItem
                icon="adduser"
                title="New contact"
                navigationTarget="NewContact"
            />

            <Contact />
        </View>
    );
};

export default ContactsScreen;
