/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Config
import _configSite from "../../_configSite";

// Images
import ImgDownCarrot from "../../images/accents/down-carrot.svg";

// Components
import SubmitButton from "../base/SubmitButton";
import Text1 from "../base/Text1";

// Shared CSS
const focusCSS = `
  &:focus,
  &:-webkit-autofill {
    + label {
      color: #00BEDB;
      top: -27px;
      font-size: 0.875em;
      left: 0;
    }
  }
`;

// Styled Components
const Form = styled.form`
  display: block;
  width: 100%;
  grid-column: 3 / span 8;
  @media (max-width: ${_configSite.md}px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: ${_configSite.sm}px) {
    grid-column: 1 / span 12;
  }
`;

const Fieldset = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: ${_configSite.sm}px) {
    grid-gap: 15px;
  }
`;

const P = styled.p`
  position: relative;
  margin: 0;
  padding: 0;
  @media (max-width: ${_configSite.xs}px) {
    grid-column: 1 / span 12;
  }
`;

const Label = styled.label`
  ${Text1.__emotion_styles};
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 5px;
  margin: 0;

  color: rgba(0, 0, 0, 0.45);
  transition: 0.2s;
  pointer-events: none;
`;

const Input = styled.input`
  ${Text1.__emotion_styles};
  width: 100%;
  height: 40px;

  padding: 5px;
  margin-bottom: 0;
  border: none;
  box-sizing: border-box;

  color: #003e57;

  ${focusCSS}
`;

const Textarea = styled.textarea`
  ${Text1.__emotion_styles};
  width: 100%;
  height: 100%;

  padding: 5px;
  margin-bottom: 0;
  border: none;
  box-sizing: border-box;

  color: #003e57;

  ${focusCSS}
`;

const Select = styled.select`
  ${Text1.__emotion_styles};
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border-radius: 3px;
  box-sizing: border-box;

  margin: 0;
  padding: 5px 5px;
  border: 1px solid #e5e5e5;

  color: #003e57;

  cursor: pointer;
  background: url(${ImgDownCarrot}) no-repeat 98% center/10px, #ffffff;
  -webkit-appearance: button;

  ${focusCSS}
  option {
    ${Text1.__emotion_styles};
  }
`;

// Encode Function for Data
function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Subject: "",
      Name: "",
      Email: "",
      Phone: "",
      Company: "",
      CurrentWebsite: "",
      Location: "",
      Message: "",
      errors: [],
      submitting: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ submitting: 1 });

    if (this.validate()) {
      const form = e.target;
      const data = { ...this.state };

      delete data.errors;
      delete data.submitting;
      delete data.Submit;

      fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...data
        })
      })
        .then(() => {
          this.setState({ submitting: 2 });
        })
        .catch(() => {
          this.validate();
          this.setState({ submitting: 0 });
        });
    } else {
      this.setState({ submitting: 0 });
    }
  }

  handleChange(e) {
    const { target } = e;

    if (target.value.length > 0) {
      if (target.labels[0].style.color.length > 0) {
        target.labels[0].removeAttribute("style");
      }
      if (target.localName === "input") {
        target.labels[0].style.top = "-27px";
        target.labels[0].style.fontSize = "0.875em";
        target.labels[0].style.color = "#00BEDB";
        target.labels[0].style.left = "0px";
      }
      if (target.localName === "select") {
        target.labels[0].style.top = "-27px";
        target.labels[0].style.fontSize = "0.875em";
        target.labels[0].style.color = "#00BEDB";
        target.labels[0].style.left = "0px";
      }
      if (target.localName === "textarea") {
        target.labels[0].style.top = "-27px";
        target.labels[0].style.fontSize = "0.875em";
        target.labels[0].style.color = "#00BEDB";
        target.labels[0].style.left = "0px";
      }
    } else {
      target.labels[0].removeAttribute("style");
    }

    console.log(target.value);

    this.setState({ [target.name]: target.value });
  }

  validate() {
    const formLength = this.formEl.length;
    const errors = [];

    if (this.formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i += 1) {
        const elem = this.formEl[i];

        if (elem.nodeName.toLowerCase() === "select") {
          if (!elem.validity.valid || elem.value === elem[0].value) {
            elem.labels[0].style.color = "red";
            errors.push(
              `Error on field: ${elem.labels[0].innerText} | Please select a value.`
            );
          }
        } else if (elem.nodeName.toLowerCase() !== "button") {
          if (!elem.validity.valid) {
            elem.labels[0].style.color = "red";
            errors.push(
              `Error on field:  ${elem.labels[0].innerText} | ${elem.validationMessage}`
            );
          }
        }
      }

      this.setState({ errors });
      return false;
    }
    this.setState(errors);
    return true;
  }

  render() {
    const {
      Name,
      Email,
      Phone,
      Company,
      CurrentWebsite,
      Location,
      Message,
      errors,
      submitting
    } = this.state;

    const { formName } = this.props;

    return (
      <Form
        ref={form => {
          this.formEl = form;
        }}
        onSubmit={this.onSubmit}
        name={formName}
        noValidate
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <textarea
          css={css`
            display: none;
          `}
          name="bot-field"
        />

        {errors.length > 0 && (
          <ul
            css={css`
              color: red;
              margin-bottom: 30px;
              padding: 0px;
              list-style: none;
              border-bottom: 2px solid ${_configSite.colorPrimary};
            `}
          >
            {errors.map(error => (
              <li
                css={css`
                  ${Text1.__emotion_styles}

                  color: red !important;
                  font-size: 0.75rem !important;
                  padding: 5px;
                  margin-bottom: 10px;
                  background: rgba(255, 255, 255, 0.5);
                `}
                key={error}
              >
                <span>{error}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Regarding */}
        <Fieldset>
          <P
            css={css`
              grid-column: span 4;
            `}
          >
            <Select
              required
              id="form-subject"
              onChange={this.handleChange}
              name="Subject"
            >
              <option value="" />
              <option value="I Would Like To Schedule A Free Consultation.">
                I Would Like To Schedule A Free Consultation.
              </option>
              <optgroup label="Websites">
                <option value="I Want A Website For My Business.">
                  I Want A Website For My Business.
                </option>
                <option value="My Website Needs An Overhaul.">
                  My Website Needs An Overhaul.
                </option>
                <option value="I Need To Convert My Website To Something Faster and More Secure.">
                  I Need To Convert My Website To Something Faster and More
                  Secure.
                </option>
                <option value="I Need A Web Team To Grow With Long-Term.">
                  I Need A Web Team To Grow With Long-Term.
                </option>
              </optgroup>

              <optgroup label="Questions">
                <option value="I Don't Have An Online Presence, Where Do I Begin?">
                  I Don&apos;t Have An Online Presence, Where Do I Begin?
                </option>
                <option value="Do I Need A Website?">
                  Do I Need A Website?
                </option>
              </optgroup>

              <optgroup label="General">
                <option value="I Wanted To Leave A Testimonial.">
                  I Wanted To Leave A Testimonial.
                </option>
                <option value="Just Wanted To Say Hi.">
                  Just Wanted To Say Hi.
                </option>
                <option value="Something Else...">Something Else...</option>
              </optgroup>
            </Select>

            <Label htmlFor="form-subject">
              Hello, I Would Like To Inquire About... *
            </Label>
          </P>

          {/* Full Name */}
          <P
            css={css`
              grid-column: span 2;
            `}
          >
            <Input
              required
              id="form-name"
              onChange={this.handleChange}
              type="text"
              name="Name"
              value={Name}
            />

            <Label htmlFor="form-name">What&#39;s Your Name? *</Label>
          </P>

          {/* Email */}
          <P
            css={css`
              grid-column: span 2;
            `}
          >
            <Input
              required
              id="form-email"
              onChange={this.handleChange}
              type="email"
              name="Email"
              value={Email}
            />

            <Label htmlFor="form-email">Best Email To Contact? *</Label>
          </P>

          {/* Phone */}
          <P
            css={css`
              grid-column: span 2;
            `}
          >
            <Input
              id="form-phone"
              onChange={this.handleChange}
              type="tel"
              name="Phone"
              value={Phone}
            />

            <Label htmlFor="form-phone">Best Number To Call?</Label>
          </P>

          {/* Location */}
          <P
            css={css`
              grid-column: span 2;
            `}
          >
            <Input
              id="form-location"
              onChange={this.handleChange}
              type="text"
              name="Location"
              value={Location}
              css={css`
                grid-column: span 3;
              `}
            />

            <Label htmlFor="form-location">Where Are You Located?</Label>
          </P>

          {/* Company Name */}
          <P
            css={css`
              grid-column: span 2;
            `}
          >
            <Input
              id="form-company"
              onChange={this.handleChange}
              type="text"
              name="Company"
              value={Company}
            />

            <Label htmlFor="form-company">
              What&#39;s Your Company&#39;s Name?
            </Label>
          </P>

          {/* Current Website */}
          <P
            css={css`
              grid-column: span 2;
            `}
          >
            <Input
              id="form-current-website"
              onChange={this.handleChange}
              type="text"
              name="CurrentWebsite"
              value={CurrentWebsite}
            />

            <Label htmlFor="form-current-website">
              What&#39;s Your Current Website?
            </Label>
          </P>

          {/* Messages */}
          <P
            css={css`
              grid-column: span 4;
              height: 250px;
            `}
          >
            <Textarea
              required
              id="form-message"
              onChange={this.handleChange}
              name="Message"
              value={Message}
            />

            <Label htmlFor="form-message">Tell Us How Can We Help! *</Label>
          </P>

          {/* Submit Button */}
          <P
            css={css`
              grid-column: 1 / span 4;
              text-align: right;
            `}
          >
            <SubmitButton
              cssProp={css`
                ${submitting === 1 && "color: rgba(0,0,0,0.5) !important;"}
                ${submitting !== 0 &&
                  "pointer-events: none !important;"}
                transition: 0.4s;
              `}
              type="submit"
            >
              {submitting === 0 && "Send"}
              {submitting === 1 && "Sending..."}
              {submitting === 2 && "Message Sent!"}
            </SubmitButton>
          </P>
        </Fieldset>
      </Form>
    );
  }
}
