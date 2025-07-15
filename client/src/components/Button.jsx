import React, { useEffect } from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import './button.css';

const Button = () => {
  useEffect(() => {
    const contactButtonMain = document.getElementById("contact_button_main");
    const contactButtonChild = document.getElementById("contact_button_child");
    const contactButtonPhone = document.getElementById("contact_button_phone");

    const handleClick = (event) => {
      event.preventDefault();
      contactButtonChild.classList.toggle('open_contact');
      contactButtonPhone.classList.toggle('open_contact');
    };

    if (contactButtonMain) {
      contactButtonMain.addEventListener("click", handleClick);
    }

    // Cleanup event listener
    return () => {
      if (contactButtonMain) {
        contactButtonMain.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div id="contact_button">
    <div id="contact_button_child" style={{display:'none'}} class="">
        <a target="_blank" href="https://maps.app.goo.gl/NXvTtAVLHvZiNoE87" class="contact_button_map">
            <img width="30" height="30" alt="gmap" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2Zv2sUQRTHN/6IEEliVESNdTRip51c0FYQo8FgY5NWEIREWws5LVRQRJLGwtKAYOslgn9BLAzGRkliIUZFo14sNB8ZfZhF7m7fzM3ObCRfWDjY/b55n72ZeTOzSbKm/1zAXuASMAG8AL7KZX5XgItAT1JUAYeASfQyoAeTogjYCNwBlrGX8dwGNsSG6AKeOADU+ne2xPwnbLpSlp4CrTFATHfyrVsxBrbLmMjSctAJwHOX+leVUBD7yF89IUBMsdNoDhgA2uXqB2aU3pEQIBUlxNY607W5l6XHIUBeKhIZaOA/rfDPhABZVCTS3sDfofAvhgCpNgnSqfBXQ4C8USTS38A/qPDPhQDRrK3M7NRVw7sNmFf4J0KA3FQk8vutysDukGtQCWF0PQTIcfLXsRAgm4HvOUJUgbbcQQTmYY4gD4JACMipHEFOhN5UzeYAMW9iBwMRmOEcQC4EhRAQM6V+8gjx2VT94CACc8MjyLUoEAKyG/jmAeILsDMaiMBc8QByOSqEkez+3jYB8c6Mt6QIAs43AXIuKYqAVmDaAeJ57nUDaAFeZSRyJPV8yfKsyzx7NOU/nOE3BbjFBaSkfKN/D6CB+xYg91K+9cAzhafkAjIq5rKFZwfwQZHQArDdIm5ZfKMuff69mA9Yes8qQM5YxuwV30dgk43RHKYZTdk0qFzmP3KMOWW9OgbGxTTs2OiuOl1swbWCs7JIHbdZDJpd2k9gj0ujEuekz70Gf5ZDP4Al1UchYEganXRtNBVrLAVx1+NXgCG/D2fHapNCOe1jH472JQPd0qWWfO0NZMbp9RSrU3IzOXY3enDEakBFEJqJKFVd6x55xhZZpQHY71R0AousYg1clZtjScHFymxYrrXSfc3q0yywLg3Sx+pVX4ROsaYkS78A4C8IokWKTaoAAAAASUVORK5CYII=" />
        </a>
        <a target="_blank" href="mailto:salesmanager@ho.com.tm" class="contact_button_mail">
            <img width="30" height="30" alt="mail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2UlEQVR4nO2YbWhOYRjHz4yxqdWMvK5G1vhCyry0hqQoLfFBFELSPsjK1L4un5R8GD4gSilvJYqUfCBaWO2T15BS8v6yedvDbD/ddd260s7ZOefxnOecp/Or9Tx7znVf93Xd3ee6/vftOCkpKSkp+YACwaGAEsmQfDImkYXAe5LLJ2CxfU+mA09IHs+BmTaJWfI5HugkOXSamP/mAHwFVsoPo4CzxJ+LQJnEvAzotlXrN9AkD4qBA8SXo8BwiXUL8Guw8tsODBOjZqCf+DAAtElsReb7UH3knNliMmA18J38kwHWSUwlwEm/DbEDGCsD5wNvyR8fgQaJpQK4HrSzPwVqxME04DHR8wyolRimAg/DSpQPQL04GgPcJDpuA+Nk7jrgTbZaqxdYKw5HAqfIPeeBUplzlZ/31K9oNOV5p1vF+M+0q8q5HejLhfrVk2zzO0mAxdoRdrHCyPgLqqsuB76QPd+ARqUuzkR1HrmrdM5s4CXheQ3MFV+VwK2oD1ZdRs5IANVepdEDM6ZaSaOusMGETeS+6jFFqlndCODD2Fb846MGuBdVIkZ5lqttZVZ1vZd8GEIGrZFmWyf/lwIncpmIqVC71eptBH7IMyMuW1TF2eMiOPvlmfXRouyMr03qUmRXkKroN5F3wFKZYARw0MXukHpvFgGX5Rht/i4pzVQstm4+SsRuiV+d5/g8iVWJ44k+qso1YLLH9dMUsfGiA5ik7O9km8gxtZfrgVf44zOwD5gne75MVPR+oCdAWW5Q0uhwmESM/m9Wq2ikwk+ipw9oVXFscNNdgyVimtsC1WWPk39OA6Mlpjlye+KZiJHpE2RAVcxuVR7Zqx9RAFfdEjliKpIYrpCTWdzoMcdvVfnabPl25LyxWfWAVlGicWUA2KtUeKO9DrIXdOXStZPCFSVxZthqUAs8IHm8sNLGHiW7SS69wFZH9lzicSgQHAoEJyUlJSXFyQN/AKRYWuwUHEYdAAAAAElFTkSuQmCC" />
        </a>
        <a target="_blank" href="https://www.facebook.com/congtylocthien" class="contact_button_facebook">
            <img width="30" height="30" alt="facebook" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
        </a>
        <a target="_blank" href="https://zalo.me/99312345678" class="contact_button_zalo">
            <img width="30" height="30" alt="whatsapp" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        </a>
    </div>
    <a href="tel:+84946906363" id="contact_button_phone" style={{visibility: 'hidden'}}  class="">
        <img width="30" height="30" alt="phone" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO3ZzYtNYRzA8Z/XUWJDGKJk5WUpWUrsyEYUNanBn6D8BbLDCv+BxcR4jSxQkxoLRnmLImXl5UZIqI9OcxY3Zu7c59zuuc9kPn/B/fac+5zn+Z2IGTN6B3swii94gK0xnWAezvpXA6tiOsAiXDe5a5E7rMQTUxuIXGE5XmjPJ/RHbjAfI9IMR25wXDUHIyd4UzHkA1ZELvBVdUORC7zUmf2RAwx1GPI8coCjHYZ8jxxgGX53EHI/coHbHYQM5HbSreIRZkcuMAtjFUJ2Rm6wLzHicuTI+KrcSwgZjFxhI34mnILXRa5wMmFVHmJh5Ah95Q9sV7F190WOsAHfEmIuYm7kCEekOV9sGJEjE09TWjkVGY+G7iTGnM5yZYwPJl5VeMzmRG6wBm8TYy5hQeQGm/AxMebmRO+ZYrVwqBzF/sKz4ohUZ8yWchacYqz5BIDtLd5TV4pBYV0xO/AjMaY4zgziapvTmQN13l9SY1T4j/XXEbOtwmOWqlHMFOqI2Yz3uu8GVtdx9H9XQ0yj2Gy6HbO2wkuzitGuhjSNlVJumFV87npI0yeKc10MGaklpCnocOJ9pl27ag0pY9Yn3jSncqb2iL+uzScSBhqttt/e30DLLfquah5jcWQ2N9ub+Lg9Le5DkaMyaDdulUf4yRRb+dKYDrCkPBVfKD4YlZ8BX+NYcc3u9e+b8d/6A8BzVur0abPMAAAAAElFTkSuQmCC" />
        +993 (65) 53-96-73
    </a>
    <a href="#contact_button_main" id="contact_button_main">
        <img width="30" height="30" alt="contact-button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVR4nO3WO2sVQRTA8RssVILYWgSMaSReEGIpYpFEi1QKfgFrwSf4AfwUFhqwt7ARa59RBCuFGLUQEdRYXOH6QMWfjJxikd17Zx+RFP5hmt1z5j+PnbPT6/1ns4DdOIdbeIUhPuM1buICproUTmEZ340nxVzDrrbSJXxUn5Sz1FR6HD8bSIuzP1FXOoev2vMF/VzpBB7ojoe54qO6Zz5HvLwB4ss54mcNOh6kznEMM5iMNhMf6cUc8acawh+4hJ1Z+9iR+B0OFvKOxDatRUVLle05rmJxpDSBp5lLOxfxe3AvI+cOpntVxAjHcTJi+1iXzwfMVonnxyQ/ibO+HS/VZw3bysSp07sjEs9E3HnNOVs1636UuzL+lEA8aiFeGVfBvpUk7Whw7P5mUCmOzldKkibj3WBDxFisSJrtYKnvV0n3430hMEkO4xQORUy6BjXldJU4ffJvcD1q7URJTDpOLxpIV7G11wbsq1lAhtjbSlqQT+N2pvgXFjoRFwawgCuxlMNoq/HscUG+jgOdykcMaku6+OEG3qa/1j8Rb0p+A80BMS4AyKiHAAAAAElFTkSuQmCC" />
    </a>
</div>


  );
};

export default Button;
