export function updatePassenger ( data){
    fetch(`https://0441-102-172-29-151.ngrok-free.app/api/passenger/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        fullName: data.fullName,
        age: data.age,
        purpose: data.purpose, 
        duration: data.duration, 
        academicLevel: data.academicLevel, 
        specialization: data.specialization, 
        specialization_other: data.specialization_other,
        company_name: data.company_name,
        precedents:data.precedents
        
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('تم اظافة المستخدم:', data);
      // يمكنك إدراج أي عمليات إضافية تحتاجها هنا
    })
    .catch(error => {
      console.error('حدث خطأ في اظافة المستخدم:', error);
    });
    
  }



 // updatePassenger(['feres',20]);
