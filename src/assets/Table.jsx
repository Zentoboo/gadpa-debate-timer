import React, { useState } from 'react';
import './Table.css'; // Importing CSS for dark theme styling

const Table = () => {
  const defaultAnswer = "..."; // Default message
  const defaultCategory = "Select a category"; // Default category message

  const [selectedAnswer, setSelectedAnswer] = useState(defaultAnswer);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  // Hardcoded data for table
  const data = [
    {
      "category": "VISI MISI DAN PROGRAM KERJA",
      "options": ["A", "B"],
      "answers": ["Jelaskan Visi dan Misi dari masing-masing calon Presiden GADPA Periode 2024/2025 secara terperinci !", "Jelaskan program kerja dengan diikuti penjelasan blueprint struktur kepengurusan yang telah kalian rencanakan jika kalian terpilih sebagai Presiden GADPA Periode 2024/2025 !"]
    },
    {
      "category": "INTERNAL ORGANISASI",
      "options": ["A", "B"],
      "answers": ["Apa yang akan Anda lakukan sebagai presiden, jika terjadi konflik yang bersifat personal atau di luar kepentingan organisasi baik di dalam departemen dan/atau antar departemen sehingga dapat mempengaruhi kinerja organisasi dimana hal tersebut dapat menimbulkan perpecahan yang mengakibatkan pengunduran diri pengurus inti dan terbentuknya lingkaran atau kubu-kubu pertemanan di dalam organisasi. Tindakan apa yang akan Anda ambil sebagai pemimpin untuk menyelesaikan konflik tersebut secara efektif dan menjaga profesionalisme di lingkungan organisasi? Jelaskan dengan menggunakan pendekatan atau penyelesaian yang akan Anda lakukan! ", "Bagaimana cara Anda menanggapi dan menyelesaikan masalah jika salah satu Anggota Pengurus Inti kalian mementingkan atau mengabaikan tugas dan pekerjaan sehingga meninggalkan kewajiban mereka sebagai komite GADPA yang disebabkan karena kesibukan di perkuliahan, kepanitiaan, klub, organisasi, ataupun aktivitas keseharian. Apa yang akan Anda lakukan sebagai Presiden untuk menyelesaikan masalah tersebut? Jelaskan penyelesaian yang akan Anda lakukan dengan mempertimbangkan mahasiswa Indonesia berkuliah di Xiamen University Malaysia menggunakan beasiswa sehingga perlu memprioritaskan akademik dan mereka mengikuti banyak kepengurusan di organisasi, klub, dan kepanitiaan! "]
    },
    {
      "category": "LEADERSHIP AND ORGANIZATIONAL BEHAVIOUR",
      "options": ["A", "B"],
      "answers": ["What actions would you take as a leader in response to a situation where one of your organization’s members receives criticism from external parties such as Bullying or Sexual Harassment from Indonesian or non-Indonesian Student or/and Staff? And how would you, as a leader, address this issue from both an organizational and personal perspective? Explain the answer by considering professionalism and legal aspects!", "If you were elected President of this organization, how would you balance your leadership position to ensure that the policies and decisions you implement are neither too strict nor too lenient, while fostering an inclusive and effective organizational environment? Please explain in detail what actions you would take!"]
    },
    {
      "category": "KOMUNITAS INDONESIA UNTUK MAHASISWA INDONESIA",
      "options": ["A", "B"],
      "answers": ["Sejak Agustus 2024, GADPA telah resmi mengubah dirinya menjadi sebuah Komunitas Pelajar Internasional asal Indonesia yang awalnya merupakan sebuah klub sehingga berfokus kepada Mahasiswa asal Indonesia. Jika Anda mendapatkan laporan dari kampus bahwasannya ada beberapa mahasiswa asal Indonesia yang melakukan pelanggaran berat yang menyebabkan harus berhubungan dengan pihak berwajib dan aparat penegak hukum Malaysia. Dalam menghadapi hal tersebut, Anda harus melibatkan pihak Persatuan Pelajar Indonesia Malaysia dan Kedutaan Besar Republik Indonesia (KBRI) untuk meminta bantuan. Bagaimana tanggapan Anda sebagai Presiden GADPA mengenai hal tersebut dan tindakan yang harus dilakukan?", "Jika Anda sebagai Presiden GADPA menghadapi masalah dimana Mahasiswa asal Indonesia di kampus menghadapi konflik terkait Bullying atau Sexual Harassment dengan sesama pelajar Indonesia ataupun pelajar dari negara lainnya sehingga mengakibatkan ketidakharmonisan dalam pertemanan di kampus dan mengganggu fokus dalam perkuliahan. Dimana Anda harus bertindak selaku orang yang memimpin organisasi sekaligus komunitas Persatuan Pelajar Indonesia di Xiamen University Malaysia agar kampus menjadi rumah yang aman dalam membina ilmu. Bagaimana cara Anda sebagai Presiden GADPA menyelesaikan dan menangani masalah tersebut sehingga hal tersebut bisa diselesaikan dengan baik dan cepat sehingga tidak akan menyebabkan efek domino nantinya?"]
    },
    {
      "category": "EKSTERNAL LINGKUP KOLABORASI KLUB DAN ORGANISASI",
      "options": ["A", "B"],
      "answers": ["Jika GADPA melakukan kolaborasi dengan komunitas atau klub lain tetapi pada persiapannya dan kegiatannya memiliki banyak masalah dan konflik di dalamnya sehingga menyebabkan ketidakseimbangan kegiatan dengan kondisi proposal sudah disetujui dan diketahui oleh pihak ECA (Extra Curricular Activities) yaitu Ms. Eunice selaku Advisor GADPA, sehingga mengharuskan Anda sebagai Presiden membuat keputusan agar acara ini tetap berjalan ataupun dibatalkan dengan mengharuskan Anda berdiskusi dengan pihak ECA dan komunitas atau klub terkait. Bagaimana anda menyelesaikan hal tersebut dan tindakan apa yang Anda akan ambil? ", "Apa tanggapan Anda jika GADPA melakukan acara kolaborasi dengan organisasi lain dan kalian bekerja sebagai mitra yang dimana Anda harus membuat keputusan secara adil dengan melakukan perjanjian kerjasama dengan melakukan penawaran bersama pihak terkait tanpa harus diketahui orang yang tidak berwenang. Akan tetapi, di perjalanan komite dari pihak Anda mengerjakan secara dominan dalam pekerjaan yang seharusnya dilakukan secara bersama sehingga memberatkan pengurus dari komite Anda. Sedangkan Anda sudah melakukan perjanjian dan penawaran kerjasama, Apa tanggapan anda dalam menghadapi masalah ini dan tindakan apa yang Anda akan ambil?"]
    },
    {
      "category": "EKSTERNAL LINGKUP ISA, SPONSORSHIP, PPI, DAN KBRI",
      "options": ["A", "B"],
      "answers": [
        "Jika GADPA atau PPI XMUM membuat kegiatan yang dalam kesepakatannya Anda sudah membuat MOU (Memorandum of Understanding) atau Nota Kesepahaman dengan pihak Sponsor tetapi di dalam perjalanannya pihak Sponsor membatalkan secara sepihak tanpa alasan yang jelas sehingga meminta dana yang sudah disalurkan untuk dikembalikan. Dimana pada permasalahan ini, dana sudah digunakan dalam kebutuhan operasional dan keperluan dalam kegiatan. Bagaimana Anda menyelesaikan masalah tersebut dengan menjawab melalui sudut pandang Anda dengan mempertimbangkan dalam sisi Hukum dan Advokasi? ",
        "GADPA merupakan bagian dari ISA (International Student Ambassador) di Xiamen University Malaysia dan merupakan bagian dari Persatuan Pelajar Indonesia Malaysia (PPI Malaysia) yang secara tidak langsung menjalin hubungan dengan Kedutaan Besar Republik Indonesia (KBRI) dengan baik. Dengan adanya hubungan dengan berbagai pihak tentunya secara tidak langsung akan mendatangkan berbagai macam tantangan dan permasalahan sendiri seperti kesulitan dalam menyesuaikan aturan ataupun menghadapi tantangan yang beragam sehingga perlunya pemahaman akan aturan dan kepentingan. Bagaimana cara Anda memastikan dan mengatur kepentingan dan harapan serta mengikuti aturan yang diberikan oleh dari masing-masing pihak tetap terpenuhi? "
      ]
    }
  ];

  // Handle button click to reveal answer and category
  const revealAnswer = (answer, category) => {
    setSelectedAnswer(answer);
    setSelectedCategory(category);
  };

  // Reset to default message
  const resetAnswer = () => {
    setSelectedAnswer(defaultAnswer);
    setSelectedCategory(defaultCategory);
  };

  return (
    <div className="table-wrapper">
      <div className="category-title">
        {'--Debate Categories--'}
      </div>
      <div className="table-container">
        <table className="table">
        <div className="timer-title">
                </div>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="table-category">{row.category}</td>
                <td className="table-buttons">
                  {row.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className="table-button"
                      onClick={() => revealAnswer(row.answers[optionIndex], row.category)}
                    >
                      {option}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ height: '100vh' }}></div>
      
      {/* Display selected category and answer outside the table */}
      <div className="category-title selected-category">{"--"}{selectedCategory}{"--"}</div>
      <div className="answer-display">
        <div className="answer">{selectedAnswer}</div>
        <button onClick={resetAnswer} className="reset-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Table;
