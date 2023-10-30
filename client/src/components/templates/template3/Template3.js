import React, { useState, useEffect } from 'react';
import { Badge, Drawer } from 'antd';
import '../../common.scss';
import './template3.css';

function Template3({ data }) {
  const [modals, setModals] = useState({
    image1: false,
  });

  // const [selectedImage1, setSelectedImage1] = useState(
  //   data?.image1?.regular[0]
  // );

  const selectedImage1 = data?.image1?.regular[0];
  const [mainImage1, setMainImage1] = useState(selectedImage1);
  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  // const [tempImage1, setTempImage1] = useState(selectedImage1);

  const showModal = (modalId) => {
    setIsSidebarOpen1(true);
  };
  const handleOk = (modalId, image) => {
    if (modalId === 'image1') {
      // setMainImage1(
      //   data?.image1?.regular[data?.image1?.thumb.indexOf(tempImage1)]
      // );
      // setMainImage1(
      //   data?.image1?.regular[data?.image1?.thumb.indexOf(selectedImage1)]
      // );
      // setMainImage1(tempImage1);

      setIsSidebarOpen1(false);
    }
  };
  const handleSidebarClose = (modalId) => {
    setMainImage1(selectedImage1);
    setIsSidebarOpen1(false);
  };

  useEffect(() => {
    setMainImage1(data?.image1?.regular[0]);
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
                                  <h1>{data.subject}</h1>
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
                    className='mcnDividerBlock'
                    style={{ minWidth: '100%' }}
                  >
                    <tbody className='mcnDividerBlockOuter'>
                      <tr>
                        <td
                          className='mcnDividerBlockInner'
                          style={{ minWidth: '100%', padding: '18px 18px 0px' }}
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
                          {data?.image1 && (
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
                                    <div className='image-container'>
                                      <div className='badge-container'>
                                        <Badge
                                          count={'Pick Another Image'}
                                          onClick={() => showModal('image1')}
                                          color='blue'
                                        />
                                      </div>
                                      <img
                                        align='center'
                                        alt=''
                                        src={mainImage1}
                                        width={564}
                                        style={{
                                          maxWidth: 564,
                                          paddingBottom: 0,
                                          display: 'inline !important',
                                          verticalAlign: 'bottom',
                                        }}
                                        className='mcnImage'
                                      />
                                    </div>
                                    <Drawer
                                      title='Pick another image'
                                      placement='right'
                                      closable={true}
                                      onClose={handleSidebarClose}
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
                                          onClick={() => handleOk('image1')}
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
                                  <p>{data.greetings}</p>
                                  <p>{data.body1}</p>
                                  <p>{data.body2}</p>
                                  <p>{data.body3}</p>
                                  <p>{data.regards}</p>
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
                    className='mcnDividerBlock'
                    style={{ minWidth: '100%' }}
                  >
                    <tbody className='mcnDividerBlockOuter'>
                      <tr>
                        <td
                          className='mcnDividerBlockInner'
                          style={{ minWidth: '100%', padding: '9px 18px 0px' }}
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
                                    title='Shop Now'
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
                                    Shop Now
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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

export default Template3;
