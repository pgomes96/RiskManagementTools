namespace RiskManagement;

entity Risks
{
    key ID : UUID;
    title : String(100);
    prio : String(5);
    descr : String(100);
    impact : Integer;
    critically : Integer;
    miti : Association to one Mitigations;
}

entity Mitigations
{
    key ID : UUID;
    description : String(100);
    owner : String(100);
    timeline : String(100);
    risks : Association to many Risks on risks.miti = $self;
}
