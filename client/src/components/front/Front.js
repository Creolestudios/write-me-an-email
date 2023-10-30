import React, { useEffect, useRef, useState } from 'react';
import './css/front.scss';
import '../common.scss';
import { Input, Button, Form, Spin, Space, Select } from 'antd';
import logo from './images/Creole_blue_logo.png';
import defaultLogo from './images/defaultlogo.png';
import gif from './images/logo animation.gif';
import axios from 'axios';
import Template1 from '../templates/template1/Template1';
import Template2 from '../templates/template2/Template2';
import Template3 from '../templates/template3/Template3';
import Template4 from '../templates/template4/Template4';
import Template5 from '../templates/template5/Template5';
import '../templates/template1/template1.css';
import '../templates/template2/template2.css';
import '../templates/template3/template3.css';
import '../templates/template4/template4.css';
import '../templates/template5/template5.css';
import { template1Css } from '../../constants/cssConstants';
import { template2Css } from '../../constants/cssConstants';
import { template3Css } from '../../constants/cssConstants';
import { template4Css } from '../../constants/cssConstants';
import { template5Css } from '../../constants/cssConstants';
import { server_url } from '../../Config';

const { TextArea } = Input;
const { Option } = Select;

const allTemplateCss = [
  template1Css,
  template2Css,
  template3Css,
  template4Css,
  template5Css,
];

function Front() {
  // const { REACT_APP_SERVER_URL, REACT_APP_LOCAL_URL } = process.env;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [OptionsInvisible, setOptionsInvisible] = useState(false);
  const [templateIndex, setTemplateIndex] = useState(0);
  const [error, setError] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [textareaValue, setTextareaValue] = useState('');
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [updatedImage, setUpdatedImage] = useState([]);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [showTemplate, setShowTemplate] = useState(true);
  const [formData, setFormData] = useState();

  const formRef = useRef();

  const templates = [
    <Template1 data={data} />,
    <Template2 data={data} />,
    <Template3 data={data} />,
    <Template5 data={data} />,
    <Template4 data={data} />,
  ];

  const validateMessages = {
    required: '${label} is required!',
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    setFormData();
    setError('');

    const {
      prompt,
      sendingPersonas,
      receivingPersonas,
      primaryPurpose,
      modifier,
    } = values;

    const requestData = {
      id: templateIndex,
      prompt: prompt,
      sendingPersonas: 'general human',
      receivingPersonas: 'general human',
      purpose: 'trying to communicate and keep it going',
      modifier: 'Friendly',
    };

    setFormData({
      prompt: prompt,
      sendingPersonas: sendingPersonas,
      receivingPersonas: receivingPersonas,
      purpose: primaryPurpose,
      modifier: modifier,
    });

    await axios
      .post(server_url + 'email-gpt/template', requestData)
      .then((res) => {
        setData(res.data);
        setIsSubmitted(true);
        setOptionsInvisible(true);
        setLoading(false);
        setError('');
      })
      .catch((error) => {
        setError('Opps! Something went wrong. Please try again.');
        setLoading(false);
      });
  };

  const handleKeyDown = async (e) => {
    setError('');
    if (e.key === 'Enter') {
      e.preventDefault();
      setShowTemplate(true);
      // setLoading(true);
      // setOptionsInvisible(true)
      setSubmissionCount(0);

      if (submissionCount === 1) {
        const { prompt } = form.getFieldsValue();
        if (!prompt.trim()) {
          setError('Please enter a prompt');
          return '';
        }

        await handleRegenerateContent();
      } else {
        formRef.current.submit();
      }
    }
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleTryAgainContent = () => {
    // setLoading(true);
    setError('');
    setOptionsInvisible(false);
    setSubmissionCount(1);
    setShowTemplate(false);
  };

  const handleRegenerateContent = async () => {
    setLoading(true);
    setError('');
    setShowTemplate(true);
    setFormData();
    setOptionsInvisible(true);

    const updatedTemplateIndex = (templateIndex + 1) % templates.length;
    setTemplateIndex(updatedTemplateIndex);

    const formValues = await form.validateFields();
    const {
      prompt,
      sendingPersonas,
      receivingPersonas,
      primaryPurpose,
      modifier,
    } = formValues;

    const requestData = {
      id: updatedTemplateIndex,
      prompt: prompt,
      sendingPersonas: 'general human',
      receivingPersonas: 'general human',
      purpose: 'trying to communicate and keep it going',
      modifier: 'Friendly',
    };

    setFormData({
      prompt: prompt,
      sendingPersonas: sendingPersonas,
      receivingPersonas: receivingPersonas,
      purpose: primaryPurpose,
      modifier: modifier,
    });

    await axios
      .post(server_url + 'email-gpt/template', requestData)
      .then((res) => {
        setData(res.data);
        setIsSubmitted(true);
        setLoading(false);
        setError('');
        setSubmissionCount(0);
      })
      .catch((error) => {
        setError('Opps! Something went wrong. Please try again.');
        setLoading(false);
        setSubmissionCount(0);
      });
  };

  const [initialTemplate, setInitialTemplate] = useState();
  useEffect(() => {
    setInitialTemplate(templates[templateIndex]);
  }, []);

  const handleDownload = async () => {
    setError('');
    setDownloadLoading(true);
    const mainData = document.getElementsByClassName('templates')[0].outerHTML;
    saveAsHtmlFile(mainData);
  };

  useEffect(() => {}, [updatedImage]);

  const saveAsHtmlFile = async (htmlContent) => {
    const fullHtmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Email Template</title>
            <style>
              ${allTemplateCss[templateIndex]}
              .disabled {
                pointer-events: none;
              }
            </style>
          </head>
          <body>
          <div class="disabled">
          ${htmlContent}
          </div>
          </body>
        </html>
      `;

    const formValues = await form.validateFields();
    const {
      prompt,
      sendingPersonas,
      receivingPersonas,
      primaryPurpose,
      modifier,
    } = formValues;

    const requestData = {
      htmlData: fullHtmlContent,
      data: formData,
    };

    await axios
      .post(server_url + 'email-gpt/savetemplate', requestData)
      .then((res) => {
        const updatedTemplate = res.data;
        setError('');

        const link = document.createElement('a');
        link.href = server_url + 'email-gpt/download/' + updatedTemplate;
        link.target = '_blank';
        link.click(); // Simulate a click event on the link
        setDownloadLoading(false);
      })
      .catch((error) => {
        setError('Opps! Something went wrong. Please try again.');
        setDownloadLoading(false);
      });
  };

  return (
    <>
      <div className='container'>
        <div className='logoHeader'>
          <img src={logo} alt='' width={150} height='auto' />
          {/* {loading ? (
            <img src={gif} id='rotateimg' alt='' style={{ opacity: 1 }} />
          ) : (
            <img src={defaultLogo} id='rotateimg' alt='' />
          )} */}
        </div>

        <div className='form'>
          <Form
            name='prompt'
            labelCol={{
              span: 8,
            }}
            style={{
              margin: '20px',
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
            autoComplete='off'
            validateMessages={validateMessages}
            form={form}
            onKeyDown={handleKeyDown}
            ref={formRef}
          >
            <Form.Item
              required
              rules={[
                {
                  required: true,
                  message: 'Please enter prompt',
                  validator: (_, value) =>
                    value.trim() !== ''
                      ? Promise.resolve()
                      : Promise.reject('Please enter prompt'),
                },
              ]}
              name='prompt'
            >
              <TextArea
                placeholder='Write an email...'
                rows={2}
                autoSize={{ minRows: 1, maxRows: 2 }}
                style={{ height: '70px !important', maxHeight: 70, width: 950 }}
                value={textareaValue}
                onChange={handleTextareaChange}
              />
            </Form.Item>

            {/* {!OptionsInvisible && (
              <div className='selectOption'>
                <Form.Item
                  required
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name='sendingPersonas'
                >
                  <Select placeholder='Sending Personas'>
                    <Option value='Loan Officer'>Loan Officer</Option>
                    <Option value='Real Estate Agent'>Real Estate Agent</Option>
                    <Option value='Assistant to a Loan Officer'>
                      Assistant to a Loan Officer
                    </Option>
                    <Option value='Branch Manager'>Branch Manager</Option>
                    <Option value='Recruiter'>Recruiter</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  required
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name='receivingPersonas'
                >
                  <Select placeholder='Receiving Personas'>
                    <Option value='Prospect'>Prospect</Option>
                    <Option value='New Lead'>New Lead</Option>
                    <Option value='Lead That Went Dark'>
                      Lead That Went Dark
                    </Option>
                    <Option value='New Partner'>New Partner</Option>
                    <Option value='Existing Partner'>Existing Partner</Option>
                    <Option value='New Potential Recruit'>
                      New Potential Recruit
                    </Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  required
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name='primaryPurpose'
                >
                  <Select placeholder='Primary Purpose'>
                    <Option value='First time reaching out'>
                      First time reaching out
                    </Option>
                    <Option value='Following up on a previous communication'>
                      Following up on a previous communication
                    </Option>
                    <Option value='Finishing a loan application'>
                      Finishing a loan application
                    </Option>
                    <Option value='Requesting new documentation to complete a loan application'>
                      Requesting new documentation to complete a loan
                      application
                    </Option>

                    <Option value='Requesting documentation for a partner'>
                      Requesting documentation for a partner
                    </Option>
                    <Option value='Requesting a referral to others in their network'>
                      Requesting a referral to others in their network
                    </Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  required
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name='modifier'
                >
                  <Select placeholder='Modifier'>
                    <Option value='Friendly'>Friendly</Option>
                    <Option value='Serious'>Serious</Option>
                    <Option value='Informative'>Informative</Option>
                  </Select>
                </Form.Item>
              </div>
            )} */}
          </Form>
        </div>

        <div className='errorhandle'>{error && <div>{error}</div>}</div>

        <Spin tip='' size='large' spinning={loading} style={{ marginTop: 100 }}>
          {isSubmitted && (
            <div
              className={`templates ${showTemplate ? '' : 'templateHidden'}`}
            >
              {templates[templateIndex]}
            </div>
          )}
        </Spin>

        <div className='footer'>
          {/* <hr style={{ width: '100%' }} /> */}
          {!isSubmitted && (
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                form='prompt'
              >
                Generate
              </Button>
            </Form.Item>
          )}

          {isSubmitted && (
            <>
              <Space>
                <div className='regeneratebtns'>
                  <Button
                    id='download'
                    download
                    onClick={handleDownload}
                    loading={downloadLoading}
                  >
                    Download
                  </Button>

                  {submissionCount == 0 && (
                    <Button
                      id='tryagain'
                      onClick={handleTryAgainContent}
                      disabled={textareaValue === ''}
                      loading={loading}
                    >
                      Try Again
                    </Button>
                  )}

                  {submissionCount == 1 && (
                    <Button
                      id='regenerate'
                      onClick={handleRegenerateContent}
                      disabled={textareaValue === ''}
                      loading={loading}
                      // ref={formRef}
                    >
                      Regenerate
                    </Button>
                  )}
                </div>
              </Space>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Front;
