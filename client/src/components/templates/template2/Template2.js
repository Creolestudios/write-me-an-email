import React, { useState, useEffect } from 'react';
import { Badge, Drawer } from 'antd';
import '../../common.scss';
import './template2.css';

function Template2({ data }) {
  const [modals, setModals] = useState({
    image1: false,
  });

  // const [selectedImage1, setSelectedImage1] = useState(
  //   data?.image1?.regular[0]
  // );
  // const [selectedImage2, setSelectedImage2] = useState(
  //   data?.image2?.regular[0]
  // );
  // const [selectedImage3, setSelectedImage3] = useState(
  //   data?.image3?.regular[0]
  // );

  const selectedImage1 = data?.image1?.regular[0];
  const selectedImage2 = data?.image2?.regular[0];
  const selectedImage3 = data?.image3?.regular[0];

  const [mainImage1, setMainImage1] = useState(selectedImage1);
  const [mainImage2, setMainImage2] = useState(selectedImage2);
  const [mainImage3, setMainImage3] = useState(selectedImage3);

  // const [prevMainImage1, setPrevMainImage1] = useState(selectedImage1);
  // const [prevMainImage2, setPrevMainImage2] = useState(selectedImage2);
  // const [prevMainImage3, setPrevMainImage3] = useState(selectedImage3);

  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  const [isSidebarOpen2, setIsSidebarOpen2] = useState(false);
  const [isSidebarOpen3, setIsSidebarOpen3] = useState(false);

  const showModal = (modalId) => {
    if (modalId === 'image1') {
      setIsSidebarOpen1(true);
    } else if (modalId === 'image2') {
      setIsSidebarOpen2(true);
    } else if (modalId === 'image3') {
      setIsSidebarOpen3(true);
    }
  };
  const handleOk = (modalId, image) => {
    if (modalId === 'image1') {
      // setPrevMainImage1(mainImage1);
      // setMainImage1(image);
      setIsSidebarOpen1(false);
    }
    if (modalId === 'image2') {
      // setPrevMainImage2(mainImage2);
      // setMainImage2(image);
      setIsSidebarOpen2(false);
    }
    if (modalId === 'image3') {
      // setPrevMainImage3(mainImage3);
      // setMainImage3(image);
      setIsSidebarOpen3(false);
    }
  };
  const handleSidebarClose = (modalId) => {
    if (modalId === 'image1') {
      // setMainImage1(prevMainImage1);
      setMainImage1(selectedImage1);
      setIsSidebarOpen1(false);
    }
    if (modalId === 'image2') {
      // setMainImage2(prevMainImage2);
      setMainImage2(selectedImage2);
      setIsSidebarOpen2(false);
    }
    if (modalId === 'image3') {
      // setMainImage3(prevMainImage3);
      setMainImage3(selectedImage3);
      setIsSidebarOpen3(false);
    }
  };

  useEffect(() => {
    setMainImage1(data?.image1?.regular[0]);
    setMainImage2(data?.image2?.regular[0]);
    setMainImage3(data?.image3?.regular[0]);
  }, [data]);

  return (
    <>
      <center>
        <div className='tablecontainer'>
          <table
            align='center'
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width='100%'
            className='templateContainer'
          >
            <tbody>
              <tr>
                <td valign='top' className='bodyContainer'>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width='100%'
                    className='mcnTextBlock'
                    style={{ minWidth: '100%' }}
                  >
                    <tbody className='mcnTextBlockOuter'>
                      <tr>
                        <td align='center' valign='top' id='templateHeader'>
                          {/*[if (gte mso 9)|(IE)]>
                              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                              <tr>
                              <td align="center" valign="top" width="600" style="width:600px;">
                              <![endif]*/}
                          <table
                            align='center'
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width='100%'
                            className='templateContainer'
                          >
                            <tbody>
                              <tr>
                                <td valign='top' className='headerContainer'>
                                  <table
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width='100%'
                                    className='mcnImageBlock'
                                    style={{ minWidth: '100%' }}
                                  >
                                    <tbody className='mcnImageBlockOuter'>
                                      <tr>
                                        <td
                                          valign='top'
                                          style={{ padding: 9 }}
                                          className='mcnImageBlockInner'
                                        >
                                          <table
                                            align='left'
                                            width='100%'
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            className='mcnImageContentContainer'
                                            style={{ minWidth: '100%' }}
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  className='mcnImageContent'
                                                  valign='top'
                                                  style={{
                                                    paddingRight: 9,
                                                    paddingLeft: 9,
                                                    paddingTop: 0,
                                                    paddingBottom: 0,
                                                    textAlign: 'center',
                                                  }}
                                                >
                                                  <img
                                                    align='center'
                                                    alt='{{team_logo}}'
                                                    src={data?.header}
                                                    width={196}
                                                    style={{
                                                      maxWidth: 196,
                                                      paddingBottom: 0,
                                                      display:
                                                        'inline !important',
                                                      verticalAlign: 'bottom',
                                                    }}
                                                    className='mcnImage'
                                                  />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/*[if (gte mso 9)|(IE)]>
                              </td>
                              </tr>
                              </table>
                              <![endif]*/}
                        </td>
                      </tr>
                      <tr>
                        <td
                          valign='top'
                          className='mcnTextBlockInner'
                          style={{ paddingTop: 9 }}
                        >
                          <table
                            align='left'
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            style={{ maxWidth: '100%', minWidth: '100%' }}
                            width='100%'
                            className='mcnTextContentContainer'
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign='top'
                                  className='mcnTextContent'
                                  style={{
                                    paddingTop: 0,
                                    paddingRight: 18,
                                    paddingBottom: 9,
                                    paddingLeft: 18,
                                  }}
                                >
                                  <h2>{data.subject}</h2>
                                  <p style={{ fontSize: '18px !important' }}>
                                    {data.greetings}
                                  </p>
                                  <p style={{ fontSize: '18px !important' }}>
                                    {data.body1}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnDividerBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnDividerBlockOuter">
                    <tr>
                      <td
                        className="mcnDividerBlockInner"
                        style={{ minWidth: "100%", padding: "18px 18px 0px" }}
                      >
                        <table
                          className="mcnDividerContent"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          style={{ minWidth: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <span />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td className="mcnDividerBlockInner" style={{ padding: 18 }}>
                        <hr
                          className="mcnDividerContent"
                          style={{
                            borderBottomColor: "none",
                            borderLeftColor: "none",
                            borderRightColor: "none",
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                */}

                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width='100%'
                    className='mcnButtonBlock'
                    style={{ minWidth: '100%' }}
                  >
                    <tbody className='mcnButtonBlockOuter'>
                      <tr>
                        <td
                          style={{
                            paddingTop: 0,
                            paddingRight: 18,
                            paddingBottom: 18,
                            paddingLeft: 18,
                          }}
                          valign='top'
                          align='center'
                          className='mcnButtonBlockInner'
                        >
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className='mcnButtonContentContainer'
                            style={{
                              borderCollapse: 'separate !important',
                              borderRadius: 3,
                              backgroundColor: '#009FC7',
                            }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  align='center'
                                  valign='middle'
                                  className='mcnButtonContent'
                                  style={{
                                    fontFamily: 'Helvetica',
                                    fontSize: 18,
                                    padding: 18,
                                  }}
                                >
                                  <a
                                    className='mcnButton '
                                    title="Let's Get Started"
                                    href={data?.button}
                                    target='_blank'
                                    style={{
                                      fontWeight: 'bold',
                                      letterSpacing: '-0.5px',
                                      lineHeight: '100%',
                                      textAlign: 'center',
                                      textDecoration: 'none',
                                      color: '#FFFFFF',
                                    }}
                                  >
                                    Let's Get Started
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* <table
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width="100%"
                  className="mcnDividerBlock"
                  style={{ minWidth: "100%" }}
                >
                  <tbody className="mcnDividerBlockOuter">
                    <tr>
                      <td
                        className="mcnDividerBlockInner"
                        style={{ minWidth: "100%", padding: 18 }}
                      >
                        <table
                          className="mcnDividerContent"
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                          style={{ minWidth: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <span />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td className="mcnDividerBlockInner" style={{ padding: 18 }}>
                        <hr
                          className="mcnDividerContent"
                          style={{
                            borderBottomColor: "none",
                            borderLeftColor: "none",
                            borderRightColor: "none",
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table> */}

                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width='100%'
                    className='mcnCaptionBlock'
                  >
                    <tbody className='mcnCaptionBlockOuter'>
                      <tr>
                        <td
                          className='mcnCaptionBlockInner'
                          valign='top'
                          style={{ padding: 9 }}
                        >
                          {data?.image1 && (
                            <table
                              align='left'
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              className='mcnCaptionBottomContent'
                            >
                              <tbody>
                                <tr>
                                  <td
                                    className='mcnCaptionBottomImageContent'
                                    align='center'
                                    valign='top'
                                    style={{ padding: '0 9px 9px 9px' }}
                                  >
                                    <div className='image-container'>
                                      <div className='badge-container'>
                                        <Badge
                                          count={'Pick Another Image'}
                                          onClick={() => showModal('image1')}
                                          color='blue'
                                        />
                                      </div>
                                      <img
                                        alt=''
                                        src={mainImage1}
                                        width={564}
                                        style={{ maxWidth: 564 }}
                                        className='mcnImage'
                                      />
                                    </div>
                                    <Drawer
                                      title='Pick another image'
                                      placement='right'
                                      closable={true}
                                      onClose={() =>
                                        handleSidebarClose('image1')
                                      }
                                      open={isSidebarOpen1}
                                      className='custom-drawer'
                                    >
                                      <div className='image-grid'>
                                        {data?.image1?.regular.map(
                                          (image, index) => (
                                            <div
                                              key={index}
                                              className={`image-item ${
                                                mainImage1 === image
                                                  ? 'selected'
                                                  : ''
                                              }`}
                                              onClick={() =>
                                                setMainImage1(image)
                                              }
                                            >
                                              <img
                                                src={image}
                                                alt=''
                                                className='modalImage'
                                              />
                                            </div>
                                          )
                                        )}
                                      </div>

                                      <div className='button-container'>
                                        <button
                                          className='okbtn'
                                          onClick={() =>
                                            handleOk('image1', mainImage1)
                                          }
                                        >
                                          Select
                                        </button>

                                        <button
                                          className='cancelbtn'
                                          onClick={() =>
                                            handleSidebarClose('image1')
                                          }
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </Drawer>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className='mcnTextContent'
                                    valign='top'
                                    style={{ padding: '0 9px 0 9px' }}
                                    width={564}
                                  >
                                    <p>{data.body2}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width='100%'
                    className='mcnCaptionBlock'
                  >
                    <tbody className='mcnCaptionBlockOuter'>
                      <tr>
                        <td
                          className='mcnCaptionBlockInner'
                          valign='top'
                          style={{ padding: 9 }}
                        >
                          {data?.image2 && (
                            <table
                              align='left'
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              className='mcnCaptionBottomContent'
                            >
                              <tbody>
                                <tr>
                                  <td
                                    className='mcnCaptionBottomImageContent'
                                    align='center'
                                    valign='top'
                                    style={{ padding: '0 9px 9px 9px' }}
                                  >
                                    <div className='image-container'>
                                      <div className='badge-container'>
                                        <Badge
                                          count={'Pick Another Image'}
                                          onClick={() => showModal('image2')}
                                          color='blue'
                                        />
                                      </div>
                                      <img
                                        alt=''
                                        src={mainImage2}
                                        width={564}
                                        style={{ maxWidth: 564 }}
                                        className='mcnImage'
                                      />
                                    </div>
                                    <Drawer
                                      title='Pick another image'
                                      placement='right'
                                      closable={true}
                                      onClose={() =>
                                        handleSidebarClose('image2')
                                      }
                                      open={isSidebarOpen2}
                                      className='custom-drawer'
                                    >
                                      <div className='image-grid'>
                                        {data?.image2?.regular.map(
                                          (image, index) => (
                                            <div
                                              key={index}
                                              className={`image-item ${
                                                mainImage2 === image
                                                  ? 'selected'
                                                  : ''
                                              }`}
                                              onClick={() =>
                                                setMainImage2(image)
                                              }
                                            >
                                              <img
                                                src={image}
                                                alt=''
                                                className='modalImage'
                                              />
                                            </div>
                                          )
                                        )}
                                      </div>

                                      <div className='button-container'>
                                        <button
                                          className='okbtn'
                                          onClick={() =>
                                            handleOk('image2', mainImage2)
                                          }
                                        >
                                          Select
                                        </button>

                                        <button
                                          className='cancelbtn'
                                          onClick={() =>
                                            handleSidebarClose('image2')
                                          }
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </Drawer>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className='mcnTextContent'
                                    valign='top'
                                    style={{ padding: '0 9px 0 9px' }}
                                    width={564}
                                  >
                                    <p>{data.body3}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width='100%'
                    className='mcnCaptionBlock'
                  >
                    <tbody className='mcnCaptionBlockOuter'>
                      <tr>
                        <td
                          className='mcnCaptionBlockInner'
                          valign='top'
                          style={{ padding: 9 }}
                        >
                          {data?.image3 && (
                            <table
                              align='left'
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              className='mcnCaptionBottomContent'
                            >
                              <tbody>
                                <tr>
                                  <td
                                    className='mcnCaptionBottomImageContent'
                                    align='center'
                                    valign='top'
                                    style={{ padding: '0 9px 9px 9px' }}
                                  >
                                    <div className='image-container'>
                                      <div className='badge-container'>
                                        <Badge
                                          count={'Pick Another Image'}
                                          onClick={() => showModal('image3')}
                                          color='blue'
                                        />
                                      </div>
                                      <img
                                        alt=''
                                        src={mainImage3}
                                        width={564}
                                        style={{ maxWidth: 1128 }}
                                        className='mcnImage'
                                      />
                                    </div>
                                    <Drawer
                                      title='Pick another image'
                                      placement='right'
                                      closable={true}
                                      onClose={() =>
                                        handleSidebarClose('image3', mainImage3)
                                      }
                                      open={isSidebarOpen3}
                                      className='custom-drawer'
                                    >
                                      <div className='image-grid'>
                                        {data?.image3?.regular.map(
                                          (image, index) => (
                                            <div
                                              key={index}
                                              className={`image-item ${
                                                mainImage3 === image
                                                  ? 'selected'
                                                  : ''
                                              }`}
                                              onClick={() =>
                                                setMainImage3(image)
                                              }
                                            >
                                              <img
                                                src={image}
                                                alt=''
                                                className='modalImage'
                                              />
                                            </div>
                                          )
                                        )}
                                      </div>

                                      <div className='button-container'>
                                        <button
                                          className='okbtn'
                                          onClick={() => handleOk('image3')}
                                        >
                                          Select
                                        </button>

                                        <button
                                          className='cancelbtn'
                                          onClick={() =>
                                            handleSidebarClose('image3')
                                          }
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </Drawer>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className='mcnTextContent'
                                    valign='top'
                                    style={{ padding: '0 9px 0 9px' }}
                                    width={564}
                                  >
                                    <p>{data.body4}</p>
                                    <p>{data.regards}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width='100%'
                    className='mcnDividerBlock'
                    style={{ minWidth: '100%' }}
                  >
                    <tbody className='mcnDividerBlockOuter'>
                      <tr>
                        <td
                          className='mcnDividerBlockInner'
                          style={{ minWidth: '100%', padding: 18 }}
                        >
                          <table
                            className='mcnDividerContent'
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width='100%'
                            style={{ minWidth: '100%' }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <span />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width='100%'
                    className='mcnBoxedTextBlock'
                    style={{ minWidth: '100%' }}
                  >
                    <tbody className='mcnBoxedTextBlockOuter'>
                      <tr>
                        <td valign='top' className='mcnBoxedTextBlockInner'>
                          {/* <table
                            align="left"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                            style={{ minWidth: "100%" }}
                            className="mcnBoxedTextContentContainer"
                          ></table> */}
                        </td>
                      </tr>

                      <tr>
                        {/*[if (gte mso 9)|(IE)]>
                              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                              <tr>
                              <td align="center" valign="top" width="600" style="width:600px;">
                              <![endif]*/}
                        <td align='center' valign='top' id='templateFooter'>
                          <table
                            align='center'
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width='100%'
                            className='templateContainer'
                          >
                            <tbody>
                              <tr>
                                <td valign='top' className='footerContainer'>
                                  <table
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width='100%'
                                    className='mcnDividerBlock'
                                    style={{ minWidth: '100%' }}
                                  >
                                    <tbody className='mcnDividerBlockOuter'>
                                      <tr>
                                        <td
                                          className='mcnDividerBlockInner'
                                          style={{
                                            minWidth: '100%',
                                            padding: 18,
                                          }}
                                        >
                                          <table
                                            className='mcnDividerContent'
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            width='100%'
                                            style={{
                                              minWidth: '100%',
                                              borderTop: '2px solid #505050',
                                            }}
                                          >
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <span />
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          {/*            
                        <td class="mcnDividerBlockInner" style="padding: 18px;">
                        <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
                                */}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width='100%'
                                    className='mcnTextBlock'
                                    style={{ minWidth: '100%' }}
                                  >
                                    <tbody className='mcnTextBlockOuter'>
                                      <tr>
                                        <td
                                          valign='top'
                                          className='mcnTextBlockInner'
                                          style={{ paddingTop: 9 }}
                                        >
                                          {/*[if mso]>
				                          <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				                          <tr>
				                          <![endif]*/}
                                          {/*[if mso]>
				                          <td valign="top" width="600" style="width:600px;">
				                          <![endif]*/}
                                          <table
                                            align='left'
                                            border={0}
                                            cellPadding={0}
                                            cellSpacing={0}
                                            style={{
                                              maxWidth: '100%',
                                              minWidth: '100%',
                                            }}
                                            width='100%'
                                            className='mcnTextContentContainer'
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  valign='top'
                                                  className='mcnTextContent'
                                                  style={{
                                                    paddingTop: 0,
                                                    paddingRight: 18,
                                                    paddingBottom: 9,
                                                    paddingLeft: 18,
                                                  }}
                                                >
                                                  <em>
                                                    Copyright © 2023 Creole
                                                    Studios, Inc All rights
                                                    reserved.
                                                  </em>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          {/*[if mso]>
				                              </td>
				                              <![endif]*/}
                                          {/*[if mso]>
				                              </tr>
				                              </table>
				                              <![endif]*/}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/*[if (gte mso 9)|(IE)]>
                              </td>
                              </tr>
                              </table>
                              <![endif]*/}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </>
  );
}

export default Template2;
