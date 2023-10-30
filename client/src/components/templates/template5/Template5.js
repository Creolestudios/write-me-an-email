import React, { useState, useEffect } from 'react';
import { Badge, Drawer } from 'antd';
import '../../common.scss';
import './template5.css';

function Template5({ data }) {
  const [modals, setModals] = useState(false);

  // const [selectedImage1, setSelectedImage1] = useState(
  //   data?.image1?.regular[0]
  // );
  // const [selectedImage2, setSelectedImage2] = useState(
  //   data?.image2?.regular[0]
  // );
  // const [selectedImage3, setSelectedImage3] = useState(
  //   data?.image3?.regular[0]
  // );
  // const [selectedImage4, setSelectedImage4] = useState(
  //   data?.image4?.regular[0]
  // );

  const selectedImage1 = data?.image1?.regular[0];
  const selectedImage2 = data?.image2?.regular[0];
  const selectedImage3 = data?.image3?.regular[0];
  const selectedImage4 = data?.image4?.regular[0];

  const [mainImage1, setMainImage1] = useState(selectedImage1);
  const [mainImage2, setMainImage2] = useState(selectedImage2);
  const [mainImage3, setMainImage3] = useState(selectedImage3);
  const [mainImage4, setMainImage4] = useState(selectedImage4);

  const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
  const [isSidebarOpen2, setIsSidebarOpen2] = useState(false);
  const [isSidebarOpen3, setIsSidebarOpen3] = useState(false);
  const [isSidebarOpen4, setIsSidebarOpen4] = useState(false);

  const showModal = (modalId) => {
    if (modalId === 'image1') {
      setIsSidebarOpen1(true);
    } else if (modalId === 'image2') {
      setIsSidebarOpen2(true);
    } else if (modalId === 'image3') {
      setIsSidebarOpen3(true);
    } else if (modalId === 'image4') {
      setIsSidebarOpen4(true);
    }
  };
  const handleOk = (modalId, image) => {
    if (modalId === 'image1') {
      // setMainImage1(
      //   data?.image1?.regular[data?.image1?.thumb.indexOf(selectedImage1)]
      // );
      setIsSidebarOpen1(false);
    }
    if (modalId === 'image2') {
      // setMainImage2(
      //   data?.image2?.regular[data?.image2?.thumb.indexOf(selectedImage2)]
      // );
      setIsSidebarOpen2(false);
    }
    if (modalId === 'image3') {
      // setMainImage3(
      //   data?.image3?.regular[data?.image3?.thumb.indexOf(selectedImage3)]
      // );
      setIsSidebarOpen3(false);
    }
    if (modalId === 'image4') {
      // setMainImage4(
      //   data?.image4?.regular[data?.image4?.thumb.indexOf(selectedImage4)]
      // );
      setIsSidebarOpen4(false);
    }
  };
  const handleSidebarClose = (modalId) => {
    if (modalId === 'image1') {
      setMainImage1(selectedImage1);
      setIsSidebarOpen1(false);
    }
    if (modalId === 'image2') {
      setMainImage2(selectedImage2);
      setIsSidebarOpen2(false);
    }
    if (modalId === 'image3') {
      setMainImage3(selectedImage3);
      setIsSidebarOpen3(false);
    }
    if (modalId === 'image4') {
      setMainImage4(selectedImage4);
      setIsSidebarOpen4(false);
    }
  };

  useEffect(() => {
    setMainImage1(data?.image1?.regular[0]);
    setMainImage2(data?.image2?.regular[0]);
    setMainImage3(data?.image3?.regular[0]);
    setMainImage4(data?.image4?.regular[0]);
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
                                  <p style={{ textAlign: 'center !important' }}>
                                    {data.greetings}
                                  </p>
                                  <p style={{ textAlign: 'center !important' }}>
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
                                ></td>
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
                            style={{ maxWidth: 300 }}
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
                                    paddingLeft: 18,
                                    paddingBottom: 9,
                                    paddingRight: 18,
                                  }}
                                >
                                  {data.body2}
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            align='left'
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            style={{ maxWidth: 300 }}
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
                                    paddingLeft: 18,
                                    paddingBottom: 9,
                                    paddingRight: 18,
                                  }}
                                >
                                  {data.body3}
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
                                    title='Read More'
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
                                    Read More
                                  </a>
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
                    className='mcnCaptionBlock'
                  >
                    <tbody className='mcnCaptionBlockOuter'>
                      <tr>
                        <td
                          className='mcnCaptionBlockInner'
                          valign='top'
                          style={{ padding: 9 }}
                        >
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className='mcnCaptionRightContentOuter'
                            width='100%'
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign='top'
                                  className='mcnCaptionRightContentInner'
                                  style={{ padding: '0 9px' }}
                                >
                                  {data?.image2 && (
                                    <table
                                      align='left'
                                      border={0}
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className='mcnCaptionRightImageContentContainer'
                                      width={264}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            className='mcnCaptionRightImageContent'
                                            align='center'
                                            valign='top'
                                          >
                                            <div className='image-container'>
                                              <div className='badge-container'>
                                                <Badge
                                                  count={'Pick Another Image'}
                                                  onClick={() =>
                                                    showModal('image2')
                                                  }
                                                  color='blue'
                                                />
                                              </div>
                                              <img
                                                alt=''
                                                src={mainImage2}
                                                width={264}
                                                style={{ maxWidth: 264 }}
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
                                                    handleOk('image2')
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
                                      </tbody>
                                    </table>
                                  )}
                                  <table
                                    className='mcnCaptionRightTextContentContainer'
                                    align='right'
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width={264}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign='top'
                                          className='mcnTextContent'
                                        >
                                          <p>{data.body4}</p>
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
                          style={{ minWidth: '100%', padding: '27px 18px 0px' }}
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
                    className='mcnCaptionBlock'
                  >
                    <tbody className='mcnCaptionBlockOuter'>
                      <tr>
                        <td
                          className='mcnCaptionBlockInner'
                          valign='top'
                          style={{ padding: 9 }}
                        >
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className='mcnCaptionLeftContentOuter'
                            width='100%'
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign='top'
                                  className='mcnCaptionLeftContentInner'
                                  style={{ padding: '0 9px' }}
                                >
                                  {data?.image3 && (
                                    <table
                                      align='right'
                                      border={0}
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className='mcnCaptionLeftImageContentContainer'
                                      width={264}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            className='mcnCaptionLeftImageContent'
                                            align='center'
                                            valign='top'
                                          >
                                            <div className='image-container'>
                                              <div className='badge-container'>
                                                <Badge
                                                  count={'Pick Another Image'}
                                                  onClick={() =>
                                                    showModal('image3')
                                                  }
                                                  color='blue'
                                                />
                                              </div>
                                              <img
                                                alt=''
                                                src={mainImage3}
                                                width={264}
                                                style={{ maxWidth: 264 }}
                                                className='mcnImage'
                                              />
                                            </div>
                                            <Drawer
                                              title='Pick another image'
                                              placement='right'
                                              closable={true}
                                              onClose={() =>
                                                handleSidebarClose('image3')
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
                                                  onClick={() =>
                                                    handleOk('image3')
                                                  }
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
                                      </tbody>
                                    </table>
                                  )}
                                  <table
                                    className='mcnCaptionLeftTextContentContainer'
                                    align='left'
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width={264}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign='top'
                                          className='mcnTextContent'
                                        >
                                          <p>{data.body5}</p>
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
                          style={{ minWidth: '100%', padding: '27px 18px 0px' }}
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
                    className='mcnCaptionBlock'
                  >
                    <tbody className='mcnCaptionBlockOuter'>
                      <tr>
                        <td
                          className='mcnCaptionBlockInner'
                          valign='top'
                          style={{ padding: 9 }}
                        >
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            className='mcnCaptionRightContentOuter'
                            width='100%'
                          >
                            <tbody>
                              <tr>
                                <td
                                  valign='top'
                                  className='mcnCaptionRightContentInner'
                                  style={{ padding: '0 9px' }}
                                >
                                  {data?.image4 && (
                                    <table
                                      align='left'
                                      border={0}
                                      cellPadding={0}
                                      cellSpacing={0}
                                      className='mcnCaptionRightImageContentContainer'
                                      width={264}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            className='mcnCaptionRightImageContent'
                                            align='center'
                                            valign='top'
                                          >
                                            <div className='image-container'>
                                              <div className='badge-container'>
                                                <Badge
                                                  count={'Pick Another Image'}
                                                  onClick={() =>
                                                    showModal('image4')
                                                  }
                                                  color='blue'
                                                />
                                              </div>
                                              <img
                                                alt=''
                                                src={mainImage4}
                                                width={264}
                                                style={{ maxWidth: 264 }}
                                                className='mcnImage'
                                              />
                                            </div>
                                            <Drawer
                                              title='Pick another image'
                                              placement='right'
                                              closable={true}
                                              onClose={() =>
                                                handleSidebarClose('image4')
                                              }
                                              open={isSidebarOpen4}
                                              className='custom-drawer'
                                            >
                                              <div className='image-grid'>
                                                {data?.image4?.thumb.map(
                                                  (image, index) => (
                                                    <div
                                                      key={index}
                                                      className={`image-item ${
                                                        mainImage4 === image
                                                          ? 'selected'
                                                          : ''
                                                      }`}
                                                      onClick={() =>
                                                        setMainImage4(image)
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
                                                    handleOk('image4')
                                                  }
                                                >
                                                  Select
                                                </button>

                                                <button
                                                  className='cancelbtn'
                                                  onClick={() =>
                                                    handleSidebarClose('image4')
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
                                  <table
                                    className='mcnCaptionRightTextContentContainer'
                                    align='right'
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width={264}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          valign='top'
                                          className='mcnTextContent'
                                        >
                                          <p>{data.body6}</p>
                                          <p>{data.regards}</p>
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

export default Template5;
